import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import fastifyCors from "@fastify/cors"

export default fastifyPlugin(async (server: FastifyInstance) => {
    server.register(fastifyCors)
});
