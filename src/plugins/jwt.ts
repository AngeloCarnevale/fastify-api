import { FastifyInstance } from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import fastifyJwt from "@fastify/jwt"

export default fastifyPlugin(async (server: FastifyInstance) => {
    server.register(fastifyJwt, {
        secret: "baaef66ac7fd97cc50889d17f456dca3"
    })
});
