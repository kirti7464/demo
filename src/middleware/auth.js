const jwt = require("jsonwebtoken");
const midd= async function(req,res,next)
{
    let header = req.headers["x-auth-token"];
  if(header)
  {
    let decodedToken =jwt.verify(header,"secret-key");
    if(!decodedToken)
    {
        res.send("Invalid token");
    }
    
      next();
    
  }
  else
  {
    res.send("Token is not present");
  }

}
module.exports.midd =midd;