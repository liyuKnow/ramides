import express from "express"
import { deleteCar, getCarById, getCars, registerCar, updateCar, getActiveCars } from '../controllers/carsController.js'


const router = express.Router();

router.get("/active/", getActiveCars)
router.post("/", registerCar);
router.get('/', getCars);
router.get("/:id", getCarById);
router.delete("/:id", deleteCar);
router.put("/:id", updateCar)

export default router;