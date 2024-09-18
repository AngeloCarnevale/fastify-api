import fastify from 'fastify';
import { app } from './app';
import { env } from "./env"

const server = fastify({ logger: true });

server.register(app);

const start = async () => {
  const host = env.HOST
  const port = Number(env.PORT)
  try {
    await server.listen({ port, host });
    console.log(`Server running at http://${host}:${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
