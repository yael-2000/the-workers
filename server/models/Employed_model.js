const mongoose = require("mongoose");
const EmployedSchema = mongoose.Schema({
    full_name: {
        type: String,
        required:true
    },
    //10=candidate, 20=worker
    status: {
        type: Number,
        default:10
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Employed', EmployedSchema);