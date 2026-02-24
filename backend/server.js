import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js"; // yaha profile ka kaam bhi

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("✅ MongoDB Connected to fuzzads"))
.catch(err => console.error("❌ MongoDB connection error:", err));

app.use("/api/auth", authRoutes); 
app.use("/api/user", userRoutes);   

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
