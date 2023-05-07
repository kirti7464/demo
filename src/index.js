const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://kirti227464:rPuz1zllF8q04JrZ@cluster0.2yqrios.mongodb.net/kirti-db1", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use(
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
);
app.use('/', route);
// unreachable becuase the cycle has terminated



app.listen(process.env.PORT || 5000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 5000))
});
