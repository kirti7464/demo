const bookModel= require("../models/bookModels");
const authorModel= require("../models/authorModels.js");

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}
const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const getBookByAuthor= async function (req, res) {
    let Book= await authorModel.find({author_name:{$eq:"Chetan Bhagat"}})
    let x= Book.map(x=>x.author_id);
    let result= await bookModel.find({author_id:x}).select({name:1,_id:0})
    res.send({msg: result})
}
const getParticularAuthor= async function (req, res) {
    let Author= await bookModel.findOneAndUpdate({name:"Two states"},{
        $set:{price:100}
    });
    let result= await authorModel.find({author_id:{ $eq:Author.author_id}}).select({author_name:1,_id:0});
    result.push({"updated_Price":Author.price});
    res.send(result)
}

const getAuthorByCost= async function (req, res) {
  
  let author= await bookModel.find({  price : {$gte: 50, $lte: 100}   });
  let x=author.map(x=>x.author_id)
  let result= await authorModel.find({author_id:x}).select({author_name:1,_id:0});
  res.send(result);
}


module.exports.createBook= createBook;
module.exports.createAuthor =createAuthor;
module.exports.getBookByAuthor= getBookByAuthor;
module.exports.getParticularAuthor = getParticularAuthor;
module.exports.getAuthorByCost= getAuthorByCost;