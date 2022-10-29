import prisma from "../database/index.js";

export const getUsers = async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
};

export const getUserById = async (req, res) => {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
        where: {
            id: Number(id),
        },
    });

    res.json(user);
}