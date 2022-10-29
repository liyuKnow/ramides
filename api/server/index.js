import express from "express";

import cors from "cors";
// import cookieParser from "cookie-parser";
// import multer from "multer";

import authRoutes from "../routes/auth.js";
import userRoutes from "../routes/users.js";

const PORT = 8080;

// CREATE APP
const app = express();

// MIDDLEWAREs
app.use(cors());
app.use(express.json());
// app.use(cookieParser());

// ROUTES
app.use("/api/auth/", authRoutes);
app.use("/api/users/", userRoutes);


const server = app.listen(PORT, () =>
    console.log(`🚀 Server ready at: http://localhost:${PORT}`)
);