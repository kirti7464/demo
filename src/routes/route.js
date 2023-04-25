const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]


   router.post('/players', function (req, res) {
    //LOGIC WILL COME HERE
    let body=req.body;
    let x=[];
    for(let i=0;i<players.length;i++)
    {
        curr=players[i];
        if(Object.values(curr).includes(curr.name)!=body.name)
        {
            x.push(curr.name);
        }
    }
    
    if(x.includes(body.name)!=true)
    {
        players.push(body);
    }
    else
    {
        res.send("This person already exists");
    }
    res.send(  { data: players , status: true }  );
})
module.exports = router;