const productModel = require('../models/productModel')

const createProduct= async function(req,res)
{
    let input = req.body;
    let data= await productModel.create(input);
    res.send({"response":data});
    
}

module.exports.createProduct =createProduct;