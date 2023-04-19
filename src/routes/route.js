const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const underScore =require('lodash');

const welcome =require('../../src/logger/logger.js');
const helper =require('../../src/util/helper.js')
const formatter =require('../../src/validator/formatter.js')

router.get('/test-me', function (req, res) {
    res.send("hii");
    welcome.welcome();
    helper.printDate();
    helper.printMonth();
    helper.printBatchInfo();
    formatter.trim1();
    formatter.changetoLowerCase();
    formatter.changetoUpperCase();

    var chunkFunction = underScore.chunk(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], 3);
    console.log(chunkFunction);
     var tailFunction = underScore.tail([1,3,5,7,9,11,13,15,17,19])
     console.log(tailFunction);
     let arr1=[4,7,2,1,7];
     let arr2=[3,4,9];
     let arr3=[5,6,0];
     let arr4=[10,4,0];
     let arr5=[3,6,88];
     var unionFunction =underScore.union(arr1,arr2,arr3,arr4,arr5);
     console.log(unionFunction);
     let pair=[["horror","The Shining"],["drama","Titanic"],["Thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
     var fromPairsFunction = underScore.fromPairs(pair);
     console.log(fromPairsFunction);





});

router.get('/test-you', function (req, res) {
    
    res.send('Hello there, welcome to this application!')
});

module.exports = router;