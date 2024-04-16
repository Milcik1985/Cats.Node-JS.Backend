import { v4 as uuidv4 } from "uuid";
import catSchema from "../models/cats.js";

const GET_ALL_CATS = async (req, res) => {
  try {
    const cats = await catSchema.find();
    return res.status(200).json({ cats: cats });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const ADD_CAT = async (req, res) => {
  try {
    console.log(req.body);
    const cat = new catSchema({
      id: uuidv4(),
      imgUrl: req.body.imgUrl,
      breed: req.body.breed,
      age: req.body.age,
    });
    await cat.save();
    return res.status(200).json({ message: "Cat was added" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const GET_CAT_BY_ID = async (req, res) => {
  try {
    const cat = await catSchema.findOne({ id: req.params.id });

    return res.status(200).json({ cat: cat });
  } catch (err) {
    return res.status(500).json({ message: "There is no cat with such id" });
  }
};

export { GET_ALL_CATS, ADD_CAT, GET_CAT_BY_ID };
