import express from "express"
import { registerOrder } from "../controllers/ordersController.js";
const router = express.Router();

router.post("/", registerOrder);
export default router;