import express from "express";

import cors from "cors";
// import cookieParser from "cookie-parser";
// import multer from "multer";

import authRoutes from "../routes/auth.js";
import userRoutes from "../routes/users.js";
import customerRoutes from "../routes/customers.js";
import requestRoutes from "../routes/requests.js";

const PORT = 8888;

// CREATE APP
const app = express();

// MIDDLEWAREs
app.use(cors());
app.use(express.json());
// app.use(cookieParser());

// ROUTES
app.use("/api/auth/", authRoutes);
app.use("/api/users/", userRoutes);
app.use("/api/customers/", customerRoutes);
app.use("/api/requests/", requestRoutes);

console.log("added new line");
const server = app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
);
