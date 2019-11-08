var express = require("express"),
    app = express(),
	path = require('path'),
	bodyParser = require("body-parser"),
	fs = require('fs');

/* this is problematic, have to find out a way to get around this . . . */
app.use(express.static("approach1"));
app.use(express.static(__dirname + 'views'));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req,res)
{
    res.send("Landing page");
});

app.get("/visualOutcomesApproach1Example1", function(req,res)
{
    res.render('./visual_outcomes_approach1_example1');
});

app.post("/visualOutcomesApproach1Example1",function(req, res){
	fs.writeFile('visual_outcomes_approach1_example1.csv', req.body.visual_outcome, (err) => {
  	if (err) throw err;
	  console.log('The file has been saved!');
	});
	res.redirect("/codeOutcomesApproach1Example1");
});

app.get("/codeOutcomesApproach1Example1", function(req,res)
{
	var dataArray = [];
	fs.readFile('visual_outcomes_approach1_example1.csv', 'utf8', function (err, data) {
  		dataArray = data.split(",");
	  	console.log(dataArray);
		res.render('./code_outcomes_approach1_example1', {visualOutcomes: dataArray});
	});
});

app.post("/codeOutcomesApproach1Example1",function(req, res){
	fs.writeFile('code_outcomes_approach1_example1.csv', req.body.codelines, (err) => {
  	if (err) throw err;
	  console.log('saved code lines!');
	});
	fs.writeFile('code_outcomes_approach1_example1.csv', req.body.rationale, (err) => {
  	if (err) throw err;
	  console.log('saved code lines!');
	});
	res.redirect("/");
});

app.get("/visualOutcomesApproach1Example2", function(req,res)
{
    res.render('./visual_outcomes_approach1_example2');
});

app.post("/visualOutcomesApproach1Example2",function(req, res){
	fs.writeFile('visual_outcomes_approach1_example2.csv', req.body.visual_outcome, (err) => {
  	if (err) throw err;
	  console.log('The file has been saved!');
	});
	res.redirect("/codeOutcomesApproach1Example2");
});

app.get("/codeOutcomesApproach1Example2", function(req,res)
{
	var dataArray = [];
	fs.readFile('visual_outcomes_approach1_example2.csv', 'utf8', function (err, data) {
  		dataArray = data.split(",");
	  	console.log(dataArray);
		res.render('./code_outcomes_approach1_example2', {visualOutcomes: dataArray});
	});
});

app.post("/codeOutcomesApproach1Example2",function(req, res){
	fs.writeFile('code_outcomes_approach1_example2.csv', req.body.codelines, (err) => {
  	if (err) throw err;
	  console.log('saved code lines!');
	});
	fs.writeFile('code_outcomes_approach1_example2.csv', req.body.rationale, (err) => {
  	if (err) throw err;
	  console.log('saved code lines!');
	});
	res.redirect("/");
});

app.get("/OutcomesApproach2Example1", (req, res) => {
	res.render('./second');
});

app.listen(3000, process.env.IP, function(){
   console.log("The egs v2 Started!");
});