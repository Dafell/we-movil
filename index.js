var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 4000));

var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

mongoose.connect(configDB.url,
        { server: { auto_reconnect: true } }, function(err, db) {
        	console.log("DASDS " + err  + " ");
        	console.log('Conectado con éxito a la BD');
});

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

require('./config/passport')(passport);

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

require('./app/frontend/routes.js')(app);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


