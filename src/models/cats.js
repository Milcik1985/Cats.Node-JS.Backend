import mongoose from "mongoose";

const catSchema = mongoose.Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  imgUrl: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
});

export default mongoose.model("Cats", catSchema);
