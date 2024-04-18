import express from "express";
import {
  GET_ALL_CATS,
  ADD_CAT,
  GET_CAT_BY_ID,
  GET_ALL_USER_CATS,
  DELETE_CAT_BY_ID,
} from "../controllers/cats.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/cats", GET_ALL_CATS);
router.post("/cats", auth, ADD_CAT);
router.get("/cats/user", auth, GET_ALL_USER_CATS);
router.get("/cats/:id", GET_CAT_BY_ID);
router.delete("/cats/:id", auth, DELETE_CAT_BY_ID);

export default router;
