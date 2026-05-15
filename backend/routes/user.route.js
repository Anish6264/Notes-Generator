import express from "express";  
import isAuth from "../middleware/isAuth.js";
import { getCurrentUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

// Define user-related routes here
userRouter.get("/current",isAuth,getCurrentUser);

export default userRouter;