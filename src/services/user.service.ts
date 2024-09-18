import { prisma } from "../lib/prisma"

export const getUsersService = async () => {
    return await prisma.user.findMany();
};

export const getUserByIdService = async (id: string) => {
    return await prisma.user.findUnique({
        where: { id: id },
    });
};
