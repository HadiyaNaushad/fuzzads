import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// PROFILE FETCH
router.get("/profile", async (req, res) => {
const authHeader = req.headers.authorization;
if (!authHeader || !authHeader.startsWith("Bearer ")) {
return res.status(401).json({ success: false, message: "No token provided" });
}

const token = authHeader.split(" ")[1];

try {
const decoded = jwt.verify(token, process.env.JWT_SECRET);
const user = await User.findById(decoded.id).select("-password");
if (!user) return res.status(404).json({ success: false, message: "User not found" });

res.json({ success: true, user });

} catch (err) {
res.status(401).json({ success: false, message: "Invalid token" });
}
});

export default router;