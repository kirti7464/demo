const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
*/
const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request
  //the second parameter is always the response
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userId = req.body.emailId;
  let pswd = req.body.password;
  let userDetails = await userModel.findOne({
    emailId: userId,
    password: pswd,
  });
  if (userDetails) {
    let token = jwt.sign({ userId: userDetails._id.toString() }, "secret-key");
    res.setHeader("x-auth-token", token);
    res.send({ status: true, data: { token: token } });
  } else {
    res.send("Incorrect emailID or password");
  }
};

const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if(user)
  {
    //let userData = await userModel.find({ _id: userId });
      res.send(user);
  }
  else
  {
    res.send("wrong user id");
  }  
   
};

// Write a **PUT api /users/:userId** to update user details. Pass the userId as path param in the url and update the attributes received in the request body. Check that request must contain **x-auth-token** header. If absent, return a suitable error.

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let attr = req.body;
  let user = await userModel.findById(userId);
  if(user)
  {
    let updatedData = await userModel.findOneAndUpdate(
      { _id: userId },
      attr,
      { new: true }
    );
    res.send(updatedData);
  }
  else
  {
    res.send("wrong user id");
  }
 
   
};

// Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as true. Check that request must contain **x-auth-token** header. If absent, return a suitable error.

const delUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if(user)
  {
    let updatedData = await userModel.findOneAndUpdate(
      { _id: userId },
      { isDeleted: true },
      { new: true }
    );
    res.send(updatedData);
  }
  else
  {
    res.send("wrong user id");
  }
};

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.delUser = delUser;
