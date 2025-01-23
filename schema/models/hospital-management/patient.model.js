import mongoos from "mongoose";

const patientSchema = new mongoos.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        enum: ["male", "female", "other"],
        required: true
    },
    address:{
        type: String
    },
    diagnosedWith:{
        type: String,
        required: true
    },
    bloodGroup:{
        type: String,
        enum: ["A+", "B+", "AB+", "AB-", 'O+', 'O-', "NOT KNOWN"],
        required: true
    },
    admittedIn:{
        type: mongoos.Schema.Types.ObjectId,
        ref: "Hospital"
    },

}, {timestamps:true})
export const Patient = mongoos.model("Patient" , patientSchema)