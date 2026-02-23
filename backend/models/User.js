// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   image: {
//     type: String,
//     default: "https://via.placeholder.com/120"
//   },
//   totalSpend: { type: Number, default: 0 },
//   totalOrders: { type: Number, default: 0 },
//   totalBalance: { type: Number, default: 0 }
// });

// export default mongoose.model("User", userSchema);



import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
