import userModel from "../database/models/userModel.js";

const signup = async (req, res) => {
  try {
    console.log(req.body);
    const newUser = new userModel({
      firstName: req.body?.firstName,
      lastName: req.body?.lastName,
    });
    await newUser.save();
    res.status(201).json({ result: "User create successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

export { signup };
