import express from "express";

import dbConnect from "./config/dbconfig.js"

const app = express();

const startServer = async() => {
    try {
        const port = process.env.PORT || 9090;
        await dbConnect();
        app.listen(port, ()=>{
            console.log(`User application server is running on ${port}`)
        })    
    } catch(err){
        console.log("Error occured in starting the application server. Please check!", err);
        process.exit(0);
    }   
}

startServer();