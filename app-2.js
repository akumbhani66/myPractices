var express = require('express');
var app = new express();
var bodyparser = require('body-parser');


app.use(bodyparser.json());

var uri = 'mongodb://localhost:27000/mytest';
mongoose.connect(uri, function(error) {
  // if error is truthy, the initial connection failed.
})


app.get("/", function(req, res){
	res.json({"hi":"hi"})
})

app.post("/post", function(req, res){
	console.log(req.body.a)
	res.json({"hi":"hi"})
})


app.listen("4000");
console.log("app runing is at 4000");