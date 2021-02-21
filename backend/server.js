import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// DB connection
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
