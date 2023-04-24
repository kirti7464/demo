const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();



router.get('/movies', function(req,res){
    let movi=["Rang de basanti", "The shining" ,"Lord of the rings", "Batman begins"];
    res.send(movi);
});

router.get("/movies/:indexNumber", function (req, res) {
  let movi = [
    "Rang de basanti",
    "The shining",
    "Lord of the rings",
    "Batman begins",
  ];

  if (req.params.indexNumber > -1 && req.params.indexNumber < movi.length) 
  {
    res.send(movi[req.params.indexNumber]);
  } 
  else 
  {
    res.send("Use a valid index number");
  }
});
router.get("/films", function (req,res) {
    let film=[{"id":1,"name":"The Shining"},{"id":2,"name":"Incendies"},{"id":3,"name":"Rang de Basanti"},{"id":4,"name":"Finding Nemo"}];
    res.send(film);
});

router.get("/films/:filmId",function(req,res){
    let film=[{"id":1,"name":"The Shining"},{"id":2,"name":"Incendies"},{"id":3,"name":"Rang de Basanti"},{"id":4,"name":"Finding Nemo"}];
    for(let i=0;i<film.length;i++)
    {
        let per=film[i];
        if(per.id==req.params.filmId)
        {
            res.send(per);
        }
        else
        {
            res.send("No movie exists with this id");
        }
    }
    
});
router.get('/test-you', function (req, res) {
    
    res.send('Hello there, welcome to this application!')
});

module.exports = router;