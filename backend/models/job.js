const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
    company:{
        type: String,
        required: true,
        trim: true
    },
    position:{
        type: String,
        required: true,
        trim: true
    },
    location:{
        type: String,
        required: true,
        trim: true
    },
    status:{
        type: String,
        enum: ["Pending","Interview","Rejected","Offer"],
        default: "Pending"
    },
    notes:{
        type: String,
        default: ''
    }   
},
{
    timestamps: true
})

module.exports = mongoose.model("Job",jobSchema)