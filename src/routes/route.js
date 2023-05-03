const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModels.js")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", bookController.createAuthor  )
router.post("/createPublisher", bookController.createPublisher  )
router.post("/createBook", bookController.createBook  )
router.get("/getAllBooks", bookController.getAllBooks  )
router.put("/updateBooks", bookController.updateBooks  )


module.exports = router;