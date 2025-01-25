import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "/.env"
})
const port = process.env.PORT || 8000
connectDB()
.then(()=>{
   app.on("error", (error)=>{
    console.log(error);
    throw error
    
   })
   app.listen(port , ()=>{
   console.log(`Server is running on port number ${port}`);

   })
})
.catch((error)=>{
 console.log("MongoDB Connection Failed 😒!!!" , error)
})
