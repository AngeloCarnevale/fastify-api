import { FastifyReply, FastifyRequest } from 'fastify';
import { getUsersService, getUserByIdService } from '../services/user.service';

export const getAllUsers = async (request: FastifyRequest, reply: FastifyReply) => {
    const users = await getUsersService();
    reply.send(users);
};


export const getUserById = async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as { id: string };
    const user = await getUserByIdService(id);
    reply.send(user);
};
