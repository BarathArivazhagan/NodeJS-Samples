
var express = require('express')
  , routes = require('./routes/AppRoutes')  
  , http = require('http')
  , path = require('path');

var app = express();


app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/lib'));
//app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/templates'));
//app.use(express.static(__dirname + '/views'));

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.home);

app.post('/login', routes.login);

app.get('/getContacts', routes.getContacts);
app.get('/getActiveUser', routes.getActiveUser);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
