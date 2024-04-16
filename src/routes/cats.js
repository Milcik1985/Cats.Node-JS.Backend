import express from "express";
import { GET_ALL_CATS, ADD_CAT, GET_CAT_BY_ID } from "../controllers/cats.js";

const router = express.Router();

router.get("/cats", GET_ALL_CATS);
router.post("/cats", ADD_CAT);
router.get("/cats/:id", GET_CAT_BY_ID);

export default router;
