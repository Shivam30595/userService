import express from "express";
import userModel from "../database/models/userModel.js";

import { signup } from "../controllers/userController.js";

const route = express.Router();

route.post("/signup", signup);

export default route;
