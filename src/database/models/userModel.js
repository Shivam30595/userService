import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: { type: String },
  // username: {type: String, required: true},
  // emailId: {type: String, required: true},
  // password: {type: String, required: true},
  // contactNumber: {type: Number, required: true},
});

const user = mongoose.model("user", userSchema);

export default user;
