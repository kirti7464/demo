const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonMidd= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/registerUser", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId",commonMidd.authenticate,commonMidd.authorise, userController.getUserData)
router.delete("/users/:userId",commonMidd.authenticate,commonMidd.authorise,  userController.delUser)

router.put("/users/:userId",commonMidd.authenticate,commonMidd.authorise,  userController.updateUser)

module.exports = router;