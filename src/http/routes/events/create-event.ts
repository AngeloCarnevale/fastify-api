import { prisma } from "@/lib/prisma";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateEventInput, createEventSchema } from "@/schemas/event";
import { verifyJwt } from "@/http/middlewares/jwt";

type CreateEventRequest = FastifyRequest<{
    Body: CreateEventInput
}>

export async function createEvent(app: FastifyInstance) {
    app.post('/', { onRequest: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {

        try {
            const body = request.body

            const data = createEventSchema.parse(body)

            const event = await prisma.event.create({
                data: {
                    ...data,
                    slug: new Date().toISOString()
                }
            })

            return reply.status(201).send({ eventId: event.id })
        } catch (error) {
            throw error
        }
    });
}