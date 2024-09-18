import { FastifyReply, FastifyRequest } from 'fastify';
import { createEventService } from '../services/event.service';
import { createEventSchema } from '../schemas/event';

export const createEventsController = async (request: FastifyRequest, reply: FastifyReply) => {
    const body = createEventSchema.parse(request.body)

    try {
        const event = await createEventService(body)

        return reply.code(201).send(event)
    }
    catch (error) {
        throw error
    }
};