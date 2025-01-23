import mongoos from "mongoose";

const medicalSchema = new mongoos.Schema({
    patientRecord:{
        type: mongoos.Schema.Types.ObjectId,
        ref:"Patient"
    },
    diagonesWithDoctor:[
        {
            type: String,
            required: true
        }
    ],
    medicalHistory:{
        type: String,
    },

}, {timestamps:true})
export const Medical = mongoos.model('Medical', medicalSchema)