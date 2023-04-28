const bookModel= require("../models/bookModels")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBook= async function (req, res) {
    let allBooks= await bookModel.find()
    res.send({msg: allBooks})
}

const getList= async function (req, res) {
    let allBooks= await bookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: allBooks})
}

const getBooksInYear= async function (req, res) {
    let yearInput= req.body;
    let savedData= await bookModel.find({year:{ $eq:yearInput.year}});
    res.send({msg: savedData})
}

const getParticularBooks= async function (req, res) {
    let Input= req.body;
    let savedData= await bookModel.find(Input);
    res.json({msg:savedData})
}

const getXINRBooks= async function (req, res) {
    let allBooks= await bookModel.find({$or:[{"price.indianPrice":"100INR"},{"price.indianPrice":"200INR"},{"price.indianPrice":"500INR"}]});
    res.send({msg: allBooks})
}

const getRandomBooks= async function (req, res) {
    let allBooks= await bookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]}).select({bookName:1,_id:0})
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBook= getBook;
module.exports.getList= getList;
module.exports.getBooksInYear= getBooksInYear;
module.exports.getRandomBooks= getRandomBooks;
module.exports.getXINRBooks= getXINRBooks;
module.exports.getParticularBooks= getParticularBooks;