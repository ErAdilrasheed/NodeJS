    import mongoos from "mongoose";

    const hospitalSchema = new mongoos.Schema({
        name:{
            type: String,
            required: true
        },
        addressLine1:{
            type: String,
            required: true
        },
        addressLine2:{
            type: String,
        },
        city:{
            type: String,
            required: true
        },
        pincode:{
            type: Number,
            required: true
        },
        specializedIn:[
            {
                type: String,
            }
        ],
    }, {timestamps:true})
    export const Hospital = mongoos.model('Hospital', hospitalSchema)