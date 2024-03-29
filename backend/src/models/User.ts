import mongoose from "mongoose";
import { randomUUID } from "crypto"; //This package comes from node js


const chatSchema = new mongoose.Schema({
    id : {
        type : String,
        default : randomUUID(), //This will generate a random IDs
    },
    role : {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
});


const userSchema = new mongoose.Schema({

    name :{
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    chats : [chatSchema],

});

export default mongoose.model("User",userSchema);