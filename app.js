var express = require("express");
var engines = require('consolidate');
var app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.engine('html', engines.hogan);
  app.set('view engine', 'html'); 
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});


//ROUTES
app.get('/', function(req, res){
	 res.render("index")
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

