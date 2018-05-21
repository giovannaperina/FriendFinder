var path = require('path');

module.exports = function(app){

    //Home Page
    app.get('/', function (req, res){
        res.sendFile(path.join(__dirname,'/../public/home.html'))
    });
    //Survey Page
    app.get('/survey', function (req, res){
        res.sendFile(path.join(__dirname,'/../public/survey.html'))
    });
    //No matching route, default to home
    app.use( function (req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'))
    });
}