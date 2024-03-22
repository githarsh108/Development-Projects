//defining a schema

const mongoose = require('mongoose');

const validator = require('validator');

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("INVALID EMAIL ID")
            }
        }
    },
    contact:{
        type:Number,
        required:true,
        min:10
    },
    message:{
        type:String,
        required:true,
        min:3
    }
})

//creating a collection
const User = mongoose.model('User',userSchema);

module.exports = User;