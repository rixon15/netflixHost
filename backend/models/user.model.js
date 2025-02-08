import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  searchHistroy: {
    type: Array,
    default: [],
  },
});

export const User = mongoose.model("User", userSchema);
