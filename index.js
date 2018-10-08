var express = require("express"),
    app     = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/speedtest", function(req, res){
    res.render("speedtest");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("Crimson Root is Online.");
});
