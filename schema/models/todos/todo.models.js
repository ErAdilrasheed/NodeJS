import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
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
    subTodo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subTodo"
        }   // Array of Sub-Todos
    ]

},{timestamps:true})
export const Todo = mongoose.model("Todo" , todoSchema)