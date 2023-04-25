const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000) );
});


app.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let missingNumber;
    let sum=0;
    n=(arr[arr.length-1]-arr[0])+1;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    missingNumber=((n*(n+1))/2)-sum;
    ///LOGIC WILL GO HERE 

    res.send(  { data: missingNumber  }  );
});

app.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let missingNumber;
    let sum=0;
    let first=arr[0];
    let last=arr[arr.length-1];
    let n=last-first+1;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    missingNumber=((n*(first+last))/2)-sum;


    ///LOGIC WILL GO HERE 

    res.send(  { data: missingNumber  }  );
});


