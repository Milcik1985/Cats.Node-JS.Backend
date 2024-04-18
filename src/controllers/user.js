import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userSchema from "../models/user.js";

const SIGN_IN = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = new userSchema({
      id: uuidv4(),
      userName: req.body.userName,
      email: req.body.email,
      password: hash,
      favoriteCats: [],
    });

    const response = await user.save();

    return res.status(200).json({ users: response });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Wrong data" });
  }
};

const LOG_IN = async (req, res) => {
  try {
    const user = await userSchema.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ message: "Wrong data" });
    }

    const doesPasswordMatch = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!doesPasswordMatch) {
      return res.status(400).json({ message: "Wrong data" });
    }

    const jwt_token = jwt.sign(
      { email: user.email, user_id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "20h" }
    );

    return res.status(200).json({ token: jwt_token });
  } catch (err) {
    console.log(err);
    return res.sttus(500).json({ message: "Internal server error" });
  }
};

export { SIGN_IN, LOG_IN };
