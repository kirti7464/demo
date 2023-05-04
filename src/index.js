const express = require('express');
require('dotenv').config()
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect(process.env.MY_DB, {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use(function(req,res,next)
{
    var currentdate = new Date(); 
    var datetime = currentdate.getFullYear()+"-" + (currentdate.getMonth()+1)+ "-" +currentdate.getDate() + " "+ currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    
    let ip= req.ip
    let url= req.originalUrl
    console.log(`${datetime}, ${ip},  ${url}`)
    next();
});
app.use('/', route);




app.listen(process.env.PORT , function () {
    console.log('Express app running on port ' + (process.env.PORT ))
});