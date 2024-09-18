import { FastifyInstance } from 'fastify';
import { createEventsController  } from '../controllers/event.controller';

export const eventRoutes = async (server: FastifyInstance) => {
  server.post('/', createEventsController);
};
