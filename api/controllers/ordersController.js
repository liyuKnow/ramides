import prisma from "../database/index.js";

export const registerOrder = async (req, res) => {
    const { customer_id, user_id, car_id, request_id } =
        req.body;
    const order = await prisma.order.create({
        data: {
            customerId: customer_id,
            userId: user_id,
            carId: car_id,
            requestId: request_id
        },
    });
    res.json({ order });
};