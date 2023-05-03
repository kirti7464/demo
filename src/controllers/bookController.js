
const authorModel= require("../models/newAuthorModels.js");
const publisherModel= require("../models/newPublisherModels.js");
const bookModel= require("../models/newBookModels.js");

const createAuthor= async function (req, res) {
    let data= req.body;
    let savedData= await authorModel.create(data);
    res.send({msg: savedData})
}

const createPublisher= async function (req, res) {
    let data= req.body;
    let savedData= await publisherModel.create(data);
    res.send({msg: savedData})
}

const createBook= async function (req, res) {
    const data= req.body; 
    if (data.author) {
      if (data.publisher) {
        let authId = await authorModel.findById(data.author);
        let pubId = await publisherModel.findById(data.publisher);
        if (authId) {
          if (pubId) {
            let result = await bookModel.create(data);
            res.send(result);
          } else {
            res.send("Publisher is not present");
          }
        } else {
          res.send("Author is not present");
        }
      } else {
        res.send("Publisher Id is required");
      }
    } else {
      res.send("Author Id is required");
    }
}

const getAllBooks =async function(req,res)
{
    let books= await bookModel.find().populate('author').populate('publisher');
    res.send(books);
}


const updateBooks =async function(req,res)
{
    let pubName= await publisherModel.find({name:{$in:["Penguin","HarperCollins"]}});
    let updBook= await bookModel.updateMany({publisher_id:pubName._id},{$set:{isHardCover:true}},{new:true});
    //  For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)
    let authName = await authorModel.find({rating :{$gt:"3.5"}}).select({_id:1})
    let updPrice= await bookModel.updateMany({author:authName},{$inc:{price:10}},{new:true});//inc for increase
    res.send(updPrice);
}
module.exports.createPublisher= createPublisher;
module.exports.createAuthor =createAuthor;
module.exports.createBook= createBook;
module.exports.getAllBooks= getAllBooks;
module.exports.updateBooks=updateBooks;


