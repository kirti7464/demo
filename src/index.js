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

app.use('/', route);

app.listen(process.env.PORT , function () {
    console.log('Express app running on port ' + (process.env.PORT ))
});