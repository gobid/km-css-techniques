var express = require("express"),
    app = express(),
	path = require('path'),
	bodyParser = require("body-parser"),
	fs = require('fs');

app.use(express.static("approach1"));
app.use(express.static(__dirname + 'views'));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req,res)
{
    res.send("Landing page");
});

app.get("/fPart1", function(req,res)
{
    res.render('./index');
});

app.post("/visualOutcomes",function(req, res){
	fs.writeFile('message.csv', req.body.visual_outcome, (err) => {
  	if (err) throw err;
	  console.log('The file has been saved!');
	});
	res.redirect("/fPart2");
});

app.get("/fPart2", function(req,res)
{
	var dataArray = [];
	fs.readFile('message.csv', 'utf8', function (err, data) {
  		dataArray = data.split(/\r?\n/);
	  	console.log(dataArray);
		res.render('./code', {visualOutcomes: dataArray});
	});
});

app.listen(4000, process.env.IP, function(){
   console.log("The egs v2 Started!");
});