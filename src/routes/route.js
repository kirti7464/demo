const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonMidd = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

// //The userId is sent by front end
router.get("/users/:userId",commonMidd.midd, userController.getUserData)

router.put("/users/:userId", commonMidd.midd,userController.updateUser)
router.delete("/users/:userId",commonMidd.midd, userController.delUser)
module.exports = router;