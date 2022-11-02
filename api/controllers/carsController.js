import prisma from "../database/index.js";

export const registerCar = async (req, res) => {
  const { brand, drivePerLiter, cabinPlateNo, bodyPlateNo, capacity, status } =
    req.body;
  const cars = await prisma.car.create({
    data: {
      brand,
      drivePerLiter,
      bodyPlateNo,
      cabinPlateNo,
      status,
      capacity,
    },
  });
  res.json({ cars });
};

export const getCars = async (req, res) => {
  const cars = await prisma.car.findMany({});
  res.json(cars);
};

export const getCarById = async (req, res) => {
  const { id } = req.params;

  const result = await prisma.car.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      id: true,
      cabinPlateNo: true,
      brand: true,
      status: true,
    },
  });

  res.json(result);
};

export const updateCar = async (req, res) => {
  const { id } = req.params;

  await prisma.car.update({
    where: {
      id: Number(id),
    },
    data: {
      brand: req.body.brand,
      drivePerLiter: req.body.drivePerLiter,
      cabinPlateNo: req.body.cabinPlateNo,
      capacity: req.body.capacity,
    },
  });
  res.json({
    success: true,
    message: "car successfully updated",
  });
};

export const deleteCar = async (req, res) => {
  const { id } = req.params;

  await prisma.car.delete({
    where: {
      id: Number(id),
    },
  });
  res.json({
    success: true,
    message: "car successfully deleted",
  });
};

export const getActiveCars = async (req, res) => {
  const cars = await prisma.car.findMany({
    where: {
      status: "active",
    },
  });
  res.json(cars);
};
