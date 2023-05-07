
const mid1= function ( req, res, next) {
    let isFreeAppUser= req.headers.isfreeappuser
    
    if(isFreeAppUser)
    {
        if(isFreeAppUser==true)
        {
            req.body.isFreeAppUser=true;
            console.log("MID1 middleware is working for true value of isFreeAppUser");
            next();
        }
        else
        {
            req.body.isFreeAppUser=false;
            console.log("MID1 middleware is working for false value of isFreeAppUser");
            next();

        }
        console.log("MID1 middleware is working");  
    }
    else
    {
        console.log("error");       
    }
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

const abc = function(req, res, next) {
    //get the users IP
    //save it in db
    // console log
    next()
}

const def = function(req, res, next) {
   //get the users IP
   //save it in db
   // console log
   next()
}

const xyz = function(req, res, next) {
   //get the users IP
   //save it in db
   // console log
   next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.abc = abc
