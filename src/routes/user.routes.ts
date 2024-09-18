import { FastifyInstance } from 'fastify';
import { getAllUsers, getUserById } from '../controllers/user.controller';

export const userRoutes = async (server: FastifyInstance) => {
  server.get('/', getAllUsers);
  server.get('/:id', getUserById);
};
