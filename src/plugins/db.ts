import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import { prisma } from "../lib/prisma"

export default fastifyPlugin(async (server: FastifyInstance) => {
    server.decorate('prisma', prisma);
    
    server.addHook('onClose', async (server) => {
        await prisma.$disconnect();
    });
});
