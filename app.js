var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, function(){
  console.log("Listening on port 3000");
})

//create our database
var puppies = [];

//read all resources

app.get('/puppies', function(req,res,next){
  res.json(puppies);
})

//read one resources

app.get('/puppies/:id', function(req,res,next){
  console.log(req.params);
  if(puppies[req.params.id]){
    res.json(puppies[req.params.id])
  } else {
    res.status(404);
    res.send("not found");
  }
})

//post a resources

app.post('/puppies', function(req,res,next){
console.log(req.body);

  var puppy = {
    id: puppies.length,
    name: req.body.name,
    phrase: req.body.phrase
  }

  puppies.push(puppy);

  res.json(puppy);
})
