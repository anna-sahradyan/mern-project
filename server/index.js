import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "../server/routes/auth.router.js";
dotenv.config();
import postRouter from "../server/routes/post.router.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/post",postRouter);

const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        app.listen(5000, () => {
            console.log(`Server is running at http://localhost:${PORT} `);
        })
    } catch (err) {
        console.log(err)
    }
}


start();