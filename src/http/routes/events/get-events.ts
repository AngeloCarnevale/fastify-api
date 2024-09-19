import { prisma } from "@/lib/prisma";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateEventInput, createEventSchema } from "@/schemas/event";
import { verifyJwt } from "@/http/middlewares/jwt";


export async function getEvents(app: FastifyInstance) {
    app.get('/', { onRequest: [verifyJwt] }, async (request: FastifyRequest, reply: FastifyReply) => {

        try {
            const eventList = await prisma.event.findMany()

            return reply.status(200).send(eventList)
        } catch (error) {
            throw error
        }
    });
}