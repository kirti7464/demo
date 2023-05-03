const mongoose=require("mongoose");
const newAuthorSchema= new mongoose.Schema({
    authorName:String,
    age:Number,
    address:String,
    rating:Number
    
},{timeStamps:true})

module.exports= mongoose.model("newAuthor",newAuthorSchema)
// { 
// _id: ObjectId("61951bfa4d9fe0d34da86829"),
// authorName:"Chetan Bhagat",
// age:50,
// address:"New Delhi",
// rating: 2
// } 
