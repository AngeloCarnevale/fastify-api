import { FastifyInstance, FastifyRequest } from "fastify";
import { BadRequestError } from "../_errors/bad-request-error";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { LoginUserInput } from "@/schemas/user";

export async function authenticateWithPassword(app: FastifyInstance) {

    app.post("/login", async (request: FastifyRequest<{ Body: LoginUserInput }>, reply) => {
        const { email, password } = request.body

        const userFromEmail = await prisma.user.findUnique({
            where: {
                email,
            }
        })
        if (!userFromEmail) {
            throw new BadRequestError('Invalid credentials.')
        }

        if (userFromEmail.password === null) {
            throw new BadRequestError(
                'User does not have a password, use social login.',
            )
        }

        const isPasswordValid = await compare(
            password,
            userFromEmail.password
        )

        if (!isPasswordValid) {
            throw new BadRequestError('Invalid credentials.')
        }

        const token = await reply.jwtSign({
            sub: {
                data: userFromEmail
            },
        }, {
            sign: {
                expiresIn: '7d'
            }
        })
        return reply.code(201).send({ token })
    })
}