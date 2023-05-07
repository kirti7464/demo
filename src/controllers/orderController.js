const { count } = require("console")
const orderModel = require("../models/orderModel")

const userModel = require("../models/userModel")
const productModel = require("../models/productModel")

const createOrder= async function (req, res) {
    let data;
    let input = req.body;
    if (req.body.userId) {
      if (req.body.productId) {
        let userID_db = await userModel.findById(req.body.userId);
        let prodID_db = await productModel.findById(req.body.productId);
        if (userID_db) {
          if (prodID_db) {
            if(req.headers.isfreeappuser=="true")
            {
                
                input.amount=0;
                data = await orderModel.create(input);
            }else{
                if(userID_db.balance>0)
                {
                  userBal = userID_db.balance - prodID_db.price;
                  let x = await userModel.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $set: { balance: userBal } },
                    { new: true }
                  );
                  input.amount = prodID_db.price;

                  data = await orderModel.create(input);
                  console.log(x);
                }
                else
                {
                    res.send("user doesn't have enough balance");
                }
            }
            
          } else {
            res.send("product id not valid");
          }
        } else {
          res.send("user id not valid");
        }
      } else {
        res.send("Product Id not present");
      }
    } else {
      res.send("User Id not present");
    }
    
    res.send({"response":data});
}


//  Perform the user and product validation. Check if the user exists as well as whether the product exists. Return an error with a suitable error message if either of these validations fail




// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true } ,
//     )

//     res.send({ msg: allBooks })
// }



// const totalSalesPerAuthor = async function (req, res) {
//     // let data = req.body 
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createOrder = createOrder
// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor
