import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: "/.env"
})
connectDB();
const port = process.env.PORT || 8000
const app = express()


app.get('/' , (req, res)=>{
    res.send("Hello Topper!")
    
})

app.listen(port , ()=>{
    console.log(`Server is running on port Number ${port}`);
    
} )
