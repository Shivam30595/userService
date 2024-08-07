import mongoose from "mongoose";

const dbConnect = async() => {
    try{
        const mongoConnectURl = process.env.MONGO_URI || "mongodb://localhost:27017"
        await mongoose.connect(mongoConnectURl);
        console.log(`Database connected successfully on ${mongoConnectURl}`)
    } catch(err){
        console.log("Error occured while connection to db", err)
    }
}

export default dbConnect;
