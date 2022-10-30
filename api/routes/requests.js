import express from "express";
import {
  deleteRequest,
  getRequestById,
  getRequests,
  registerRequest,
  updateRequest,
} from "../controllers/requestsController.js";

const router = express.Router();

router.get("/", getRequests);
router.get("/:id", getRequestById);
router.post("/", registerRequest);
router.put("/:id", updateRequest);
router.delete("/:id", deleteRequest);

export default router;
