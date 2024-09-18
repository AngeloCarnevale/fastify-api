import { TypeOf, z } from 'zod';

export const createEventSchema = z.object({
    title: z.string().min(4, { "message": "Title is not null" }),
    details: z.string().nullable(),
    maximumAttendees: z.number().int().positive().nullable(),
});

export type CreateEventInput = z.infer<typeof createEventSchema>

const event = z.object({
    id: z.string().uuid(),
    title: z.string().min(4),
    details: z.string().nullable(),
    maximumAttendees: z.number().int().positive().nullable(),
    slug: z.date()
})

export type Event = z.infer<typeof event>