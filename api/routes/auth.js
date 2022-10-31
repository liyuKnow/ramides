import express from "express";
import {
  register,
  login,
  customerLogin,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/customers/login", customerLogin);

export default router;
