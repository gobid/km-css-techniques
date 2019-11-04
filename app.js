var express = require("express"),
    app = express();

app.get("/", function(req,res)
{
    res.send("landing");
});

app.get("/getCSS", function(req,res)
{
    res.send("getting CSS");
});

app.listen(4000, process.env.IP, function(){
   console.log("The egs v2 Started!");
});