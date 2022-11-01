import express from "express";
import {
  deleteRequest,
  getPending,
  getRequestById,
  getRequests,
  registerRequest,
  updateRequest,
  getInfo
} from "../controllers/requestsController.js";

const router = express.Router();

router.get("/", getRequests);
router.get("/pending", getPending);
router.get("/info/:id", getInfo);
router.get("/:id", getRequestById);
router.post("/", registerRequest);
router.put("/:id", updateRequest);
router.delete("/:id", deleteRequest);

export default router;
