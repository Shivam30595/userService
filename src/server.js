import express from "express";

import dbConnect from "./config/dbconfig.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/user", userRoutes);

const startServer = async () => {
  try {
    const port = process.env.PORT || 9090;
    await dbConnect();
    app.listen(port, () => {
      console.log(`User application server is running on ${port}`);
    });
  } catch (err) {
    console.log(
      "Error occured in starting the application server. Please check!",
      err
    );
    process.exit(0);
  }
};

startServer();
