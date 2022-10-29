import prisma from "../database/index.js";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { first_name, last_name } = req.body;

    // CREATE USER ADDRESS
    // const addressData = address
    //     ? address.map((address) => {
    //         return { title: address.phone_no, content: address.email || undefined };
    //     })
    //     : [];

    const result = await prisma.user.create({
        data: {
            firstName: first_name,
            lastName: last_name
            // userAddress: {
            //     create: addressData,
            // },
        },
    });
    res.json(result);
};