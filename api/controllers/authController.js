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

export const login = async (req, res) => {
  //CHECK USER
  // const { username, password } = req.body;

  const user = await prisma.user.findFirst({
    where: { firstName: req.body.first_name },
  });

  if (user === null) return res.status(500).json("User not found!");

  //CHECK PASSWORD
  const isPasswordCorrect = bcrypt.compareSync(
    req.body.password,
    user.password
  );

  if (!isPasswordCorrect)
    return res.status(400).json("Wrong username or password!");

  // const token = jwt.sign({ id: data[0].id }, "jwtkey");
  const { password, ...other } = user;

  return res.status(200).json(other);
  // return res
  //   .cookie("access_token", "string", {
  //     httpOnly: true,
  //   })
  //   .status(200)
  //   .json(user);
};

export const customerLogin = async (req, res) => {
  //CHECK COMPANY
  const company = await prisma.customer.findFirst({
    where: { companyName: req.body.company_name },
  });

  if (company === null) return res.status(500).json("Company not found!");

  //CHECK PASSWORD
  const isPasswordCorrect = bcrypt.compareSync(
    req.body.password,
    company.password
  );

  if (!isPasswordCorrect)
    return res.status(400).json("Wrong Company Name or password!");

  // const token = jwt.sign({ id: data[0].id }, "jwtkey");
  const { password, ...other } = company;

  return res.status(200).json(other);
  // return res
  //   .cookie("access_token", "string", {
  //     httpOnly: true,
  //   })
  //   .status(200)
  //   .json(user);
};
