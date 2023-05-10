const jwt = require("jsonwebtoken");
const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-auth-token"];
    if(token)
    {
      let decodedToken= jwt.verify(token, "secret-key");
      if(decodedToken){
        next();
      }
      else{
        res.send("Invalid token");
      }

    }
    else{
      res.send("token is required");
    }

}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let userId = req.params.userId;
    
    let decodedToken= jwt.verify(req.headers["x-auth-token"],"secret-key");
    if(userId==decodedToken.userId)
    {
      console.log("Authorised");
      next()
    }
    else{
      res.send("Not authorised");
    }
}
module.exports.authenticate=authenticate;
module.exports.authorise=authorise;