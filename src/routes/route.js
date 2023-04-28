const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModels.js")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", bookController.createBook  )

router.get("/getBook", bookController.getBook)

router.get("/getList", bookController.getList)

router.post("/getBooksInYear", bookController.getBooksInYear);

router.post("/getParticularBooks", bookController.getParticularBooks);

router.get("/getXINRBooks", bookController.getXINRBooks)

router.get("/getRandomBooks", bookController.getRandomBooks)

module.exports = router;