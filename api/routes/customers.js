import express from "express";
import {
  deleteCustomer,
  getCustomerById,
  getCustomers,
  registerCustomer,
  updateCustomer,
} from "../controllers/customersController.js";

const router = express.Router();

router.get("/", getCustomers);
router.get("/:id", getCustomerById);
router.post("/", registerCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;
