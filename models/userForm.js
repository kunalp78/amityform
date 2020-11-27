const mongoose = require('mongoose');

const userFormSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        max:32,
        index:true,
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        max:32
    },
    aemail:{
        type:String,
        trim:true,
        unique:true,
        max:32
    },
    uri:{
        type:String
    }
},{
    timestamps:true
});
const userForm = mongoose.model('userFormSchema',userFormSchema);

module.exports = userForm;

