import prisma from "../database/index.js";
import bcrypt from "bcryptjs";

export const registerCustomer = async (req, res) => {
  const { company_name, first_name, last_name, password } = req.body;

  // CREATE CUSTOMER ADDRESS
  // const addressData = address
  //     ? address.map((address) => {
  //         return { title: address.phone_no, content: address.email || undefined };
  //     })
  //     : [];

  //HASH THE PASSWORD
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const result = await prisma.customer.create({
    data: {
      companyName: company_name,
      firstName: first_name,
      lastName: last_name,
      password: hashedPassword,
      // customerAddress: {
      //     create: addressData,
      // },
    },
    select: {
      id: true,
      companyName: true,
      firstName: true,
      lastName: true,
    },
  });
  res.json(result);
};

export const getCustomers = async (req, res) => {
  const customers = await prisma.customer.findMany({
    select: {
      id: true,
      companyName: true,
      firstName: true,
      lastName: true,
    },
  });
  res.json(customers);
};

export const getCustomerById = async (req, res) => {
  const { id } = req.params;

  const customer = await prisma.customer.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      id: true,
      companyName: true,
      firstName: true,
      lastName: true,
    },
  });

  res.json(customer);
};

export const updateCustomer = async (req, res) => {
  const { id } = req.params;

  await prisma.customer.update({
    where: {
      id: Number(id),
    },
    data: {
      companyName: req.body.company_name,
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      password: req.body.password,
    },
  });
  res.json({
    success: true,
    message: "user successfully updated",
  });
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  await prisma.customer.delete({
    where: {
      id: Number(id),
    },
  });
  res.json({
    success: true,
    message: "customer successfully deleted",
  });
};
