import express from "express";
import { SIGN_IN, LOG_IN } from "../controllers/user.js";

const userRouter = express.Router();

userRouter.post("/users", SIGN_IN);
userRouter.post("/users/login", LOG_IN);

export default userRouter;
