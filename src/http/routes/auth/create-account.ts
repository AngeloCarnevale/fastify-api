import { prisma } from "@/lib/prisma";
import { CreateUserInput } from "@/schemas/user";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { BadRequestError } from "../_errors/bad-request-error";
import { hash } from "bcryptjs";

export async function createAccount(app: FastifyInstance) {
    app.post('/register', async (request: FastifyRequest<{ Body: CreateUserInput }>, reply: FastifyReply) => {
        const body = request.body

        const { email, password } = body

        const userWithSameEmail = await prisma.user.findUnique({
            where: {
                email,
            }
        })

        if (userWithSameEmail) {
            throw new BadRequestError("User with same e-mail already exists.")
        }

        const hashedPassword = await hash(password, 12)

        await prisma.user.create({
            data: {
                ...body,
                name: "",
                password: hashedPassword
            }
        })
        return reply.status(201).send()
    });
}