import prisma from "../database/index.js";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { first_name, last_name, password } = req.body;

  // CREATE USER ADDRESS
  // const addressData = address
  //     ? address.map((address) => {
  //         return { title: address.phone_no, content: address.email || undefined };
  //     })
  //     : [];

  //HASH THE PASSWORD
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const result = await prisma.user.create({
    data: {
      firstName: first_name,
      lastName: last_name,
      password: hashedPassword,
      // userAddress: {
      //     create: addressData,
      // },
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
  });
  //   const { password, ...user } = result;
  res.json(result);
};
