//Dependecies
var express = require ('express');
var path = require ('path');
var bodyParser = require ('body-parser');

var friendFinder = require ('./app/data/friends.js');
//Express
var app = express();
var port = process.env.PORT || 8000

app.use(express.static('app/public')); //access CSS files

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//Starts the server
server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });


  
