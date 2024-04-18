import mongoose from "mongoose";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = mongoose.Schema({
  id: { type: String, required: true },
  userName: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Email address is required"],
    validate: {
      validator: function (email) {
        return emailRegex.test(email);
      },
      message: "Please fill a valid email",
    },
  },
  password: { type: String, required: true },
  favoriteCats: { type: Array, required: false },
});

export default mongoose.model("User", userSchema);
