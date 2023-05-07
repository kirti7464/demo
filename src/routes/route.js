const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const OrderController= require("../controllers/orderController")
const ProductController= require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createBook", commonMW.abc, BookController.createBook  )
// router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)



router.post("/createProduct", ProductController.createProduct  )

router.post("/createUser",commonMW.mid1, UserController.createUser  )
router.post("/createOrder",commonMW.mid1, OrderController.createOrder  )
module.exports = router;