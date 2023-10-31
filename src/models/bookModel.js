import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    author:{
        type:String,
        required:true,
    },
    summary:{
        type:String,
        required:true
    },

},{timestamps:true})
 
const Books=mongoose.model('books',bookSchema);
export default Books