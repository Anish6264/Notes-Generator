import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/connectDb.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";


dotenv.config();


const app = express();
app.use(cors(
    {origin:"http://localhost:5173",
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
    }
))
app.use(express.json());
app.use(cookieParser())


app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Hello World"
    });
})
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDB();
})