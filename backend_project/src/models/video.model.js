import mongoose from "mongoose";
const videoSchema  = new mongoose.Schema({
    videoCreator:{
        type: String
    }
}, {timestamps:true})