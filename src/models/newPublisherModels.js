const mongoose= require("mongoose");
const newPublisherSchema= new mongoose.Schema({
    name:String,
    headQuarter:String
},{timeStamps:true})

module.exports = mongoose.model("newPublisher", newPublisherSchema);
// {
//     _id: ObjectId("61951bfa4d9fe0d34da86344"),
// name: “Penguin”,
// headQuarter: “New Delhi”,
// }
