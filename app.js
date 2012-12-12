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


app.listen(3000);
console.log('Listening on port 3000');
//console.log(app.routes)

