import { CreateEventInput } from "../schemas/event";
import { prisma } from "../lib/prisma"

export const createEventService = async (data: CreateEventInput) => {
    const event = await prisma.event.create({
        data: {
            slug: new Date().toISOString(),
            ...data
        },
    });
    return { eventId: event.id }
};