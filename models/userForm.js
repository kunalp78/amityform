const mongoose = require('mongoose');

const userFormSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        max:32
    },
    aemail:{
        type:String,
        max:32
    },
    uri:{
        type:String
    },
},{
    timestamps:true
});
const userForm = mongoose.model('userFormSchema',userFormSchema);

module.exports = userForm;

