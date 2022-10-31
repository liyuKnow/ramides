import prisma from "../database/index.js";

export const registerRequest = async (req, res) => {
  const {
    item,
    tarif,
    noOfCars,
    startingDate,
    endDate,
    startingPlace,
    destination,
    remark,
    customer_id,
  } = req.body;

  const result = await prisma.request.create({
    data: {
      item,
      tarif,
      noOfCars,
      startingDate,
      endDate,
      startingPlace,
      destination,
      remark,
      customerId: customer_id,
    },
  });
  res.json(result);
};

export const getRequests = async (req, res) => {
  const requests = await prisma.request.findMany({});
  res.json(requests);
};

export const getRequestById = async (req, res) => {
  const { id } = req.params;

  const request = await prisma.request.findUnique({
    where: {
      id: Number(id),
    },
  });

  res.json(request);
};

export const updateRequest = async (req, res) => {
  const { id } = req.params;

  await prisma.request.update({
    where: {
      id: Number(id),
    },
    data: {
      item: req.body.item,
      tarif: req.body.tarif,
      noOfCars: req.body.no_of_cars,
      startingDate: req.body.starting_date,
      endDate: req.body.end_date,
      startingPlace: req.body.starting_place,
      destination: req.body.destination,
      remark: req.body.remark,
    },
  });
  res.json({
    success: true,
    message: "user successfully updated",
  });
};

export const deleteRequest = async (req, res) => {
  const { id } = req.params;

  await prisma.request.delete({
    where: {
      id: Number(id),
    },
  });
  res.json({
    success: true,
    message: "request successfully deleted",
  });
};