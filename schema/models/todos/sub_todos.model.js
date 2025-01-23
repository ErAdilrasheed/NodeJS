import mongoose from "mongoose";
 const subTodo = new mongoose.Schema({
    content:{
            type: String,
            required: true,
        },
        completed:{
            type: Boolean,
            default: false,
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,   // when we give type of this we must give a reference
            ref: "User",
        },
 }, {timestamps:true})
 export const SubTodo = mongoose.model("SubTodo", subTodo)