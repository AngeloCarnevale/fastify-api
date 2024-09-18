import { FastifyInstance } from 'fastify';
import { userRoutes } from './routes/user.routes';
import { eventRoutes } from './routes/event.routes';
import db from './plugins/db';

export const app = async (server: FastifyInstance) => {
  // server.setErrorHandler((error, request, reply) => {
  //   if (error.validation) {
  //     reply.code(400)
  //       .send({
  //         error: "Invalid request data", details: error.validation
  //       })
  //   } else if (error.name === "PrismaClientKnowRequestError") {
  //     reply.code(400) // Bad Request
  //       .send({ error: 'Database error', details: error.message });
  //   }
  //   else {
  //     reply.code(500) // Internal Server Error
  //       .send({ error: 'Internal server error', details: error.message });
  //   }
  // })
  server.register(db)
  server.register(userRoutes, { prefix: '/users' });
  server.register(eventRoutes, { prefix: '/events' });
};
