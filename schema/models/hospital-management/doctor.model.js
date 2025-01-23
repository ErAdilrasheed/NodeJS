import mongoos from "mongoose";

const doctorSchema = new mongoos.Schema({
    name:{
        type: String,
        required:true
    },
    qualification:{
        type: String,
        required: true
    },
    experience:{
        type: Number,
        default: 0
    },
    salary:{
        type: String,
        default: 0
    },
    worksInHospital:[{
        type: mongoos.Schema.Types.ObjectId,
        ref:"Hospital"
    }],
}, {timestamps:true})
export const Doctor = mongoos.model("Doctor" , doctorSchema)