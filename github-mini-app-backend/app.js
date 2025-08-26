import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import githubRoutes from "./routes/githubRoutes.js";
import { connectDB } from "./config/db.js"; 

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// connect DB
connectDB();

// routes
app.use("/api", githubRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
