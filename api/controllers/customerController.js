import prisma from "../database/index.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
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
            password: hashedPassword
            // customerAddress: {
            //     create: addressData,
            // },
        },
    });
    res.json(result);
};

export const getCustomers = async (req, res) => {
    const customers = await prisma.customer.findMany();
    res.json(customers);
};

export const getCustomerById = async (req, res) => {
    const { id } = req.params;

    const customer = await prisma.customer.findUnique({
        where: {
            id: Number(id),
        },
    });

    res.json(customer);
}
export const deleteCustomer = async (req, res) => {
    const { id } = req.params;

    await prisma.customer.delete({
        where: {
            id: Number(id),
        },
    });
    res.json({
        success: true,
        message: 'customer successfully deleted'
    });
}