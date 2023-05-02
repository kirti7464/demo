const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModels.js")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", bookController.createBook  )
router.post("/createAuthor", bookController.createAuthor  )
router.get("/getBookByAuthor", bookController.getBookByAuthor)
router.get("/getParticularAuthor", bookController.getParticularAuthor);
router.get("/getAuthorByCost", bookController.getAuthorByCost)


module.exports = router;