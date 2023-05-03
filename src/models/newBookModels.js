const mongoose=require("mongoose");
const newBookSchema= new mongoose.Schema({
    name:String,
    author:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"newAuthor"
    },
    price:Number,
    ratings:Number,
    publisher:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"newPublisher"
    },
    isHardCover:{
        type:Boolean,
        default:false   
    }
})
module.exports = mongoose.model("newBook", newBookSchema);
// {
//     _id: ObjectId("61951bfa4d9fe0d34da86344"),
// name:"Two states",
//     author:"61951bfa4d9fe0d34da86829",
// price:50,
//     ratings:4.5,
//     publisher: "61951bfa4d9fe0d34da84523"
// }
