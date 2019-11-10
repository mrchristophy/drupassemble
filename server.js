var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'drupassemble'
});

var app = express();
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/auth', function (request, response) {
    var email = request.body.email;
    var password = request.body.password;

    if (email && password) {
        connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function (error, results, fields) {

            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.email = email;
                response.json({'success': 1, 'email': request.session.email});
            } else {
                response.json({'success': 0, 'message': 'Incorrect Username and/or Password!'});
            }
            response.end();
        });
    } else {
        response.json({'success': 0, 'message': 'Please enter Username and Password!'});
        response.end();
    }
});

app.get('/user', function (request, response) {
    if (request.session.loggedin) {
        response.json({email: request.session.email});
    } else {
        response.json({'email': 'none'});
        //response.json(request.session.email);
    }

});


app.get('/home', function (request, response) {
    if (request.session.loggedin) {
        response.json({'message': 'Welcome back, ' + request.session.username});
    } else {
        response.json({'message': 'Please login to view this page!'});
    }
    response.end();
});

app.listen(5000);