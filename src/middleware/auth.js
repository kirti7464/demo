const jwt = require("jsonwebtoken");
const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-auth-token"];
    if(token)
    {
      let decodedToken= jwt.verify(token, "secret-key");
      try{if(decodedToken){
        req.user=decodedToken;
        next();

      }}
      catch(er){
        return res.status(401).send({msg:"Invalid token"});
      }
      

    }
    else{
       return res.send("token is required");
    }

}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let userId= req.params.userId;
    // console.log(decodedToken);
    try{if(userId==req.user.userId)
    {
      console.log("Authorised");
      next()
    }}
    catch(er){
      return res.status(403).send("Not authorised");
    }
}
module.exports.authenticate=authenticate;
module.exports.authorise=authorise;