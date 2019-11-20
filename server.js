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
    saveUninitialized: true,
    cookie: {
        maxAge: 36000000,
        httpOnly: false // <- set httpOnly to false
    }
}));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/auth', function (request, response) {


    var email = request.body.email;
    var password = request.body.password;

    if (email && password) {
        connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function (error, results, fields) {

            if (results && results.length > 0) {
                request.session.loggedin = true;
                request.session.email = email;
                request.session.uid = results[0].id;

                response.json({'success': 1, 'email': request.session.email, uid: results[0].id});
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
        response.json({'email': false});
    }

});

app.get('/projects', function (request, response) {

    if (request.session.loggedin) {

        connection.query('SELECT * FROM projects WHERE uid = ?', [request.session.uid], function (error, results, fields) {
            if (results && results.length > 0) {
                response.json({projects: results});
            } else {
                response.json({projects: {}});
            }
        });
    } else {
        response.json({'email': false});
    }

});

app.post('/projects/add', function (request, response) {
    if (request.session.loggedin) {

        var post = {uid: request.session.uid, title: request.body.title, created: parseInt(request.body.createdAt)};
        connection.query('INSERT INTO projects SET ?', post, function (error, results, fields) {
            if (results) {
                response.json({project_id: results.insertId});
            }
        });

    } else {
        response.json({'email': false});
    }
});

app.delete('/projects/delete', function (request, response) {
    if (request.session.loggedin) {

        connection.query('DELETE FROM projects WHERE id = ?', [request.body.id], function (error, results, fields) {
            if (results) {
                response.json({project_id: results.insertId});
            }
        });

    } else {
        response.json({'email': false});
    }
});

app.get('/project-detail/:pid', function (request, response) {
    if (request.session.loggedin) {
        connection.query('SELECT * FROM projects WHERE id = ?', [request.params.pid], function (error, results, fields) {
            if (results && results.length > 0) {
                response.json({project: results[0]});
            } else {
                response.json({project: {}});
            }
        });
    } else {
        response.json({'email': false});
    }
});


app.get('/content-types/:pid', function (request, response) {
    if (request.session.loggedin) {
        connection.query('SELECT * FROM content_types WHERE pid = ?', [request.params.pid], function (error, results, fields) {

            if (results && results.length > 0) {
                response.json({contentTypes: results});
            } else {
                response.json({contentTypes: []});
            }
        });
    } else {
        response.json({'email': false});
    }
});

app.post('/content-types/add', function (request, response) {
    if (request.session.loggedin) {

        var post = {title: request.body.title, created: parseInt(request.body.createdAt), pid: request.body.projectId};
        connection.query('INSERT INTO content_types SET ?', post, function (error, results, fields) {
            if (results) {
                response.json({contentTypeId: results.insertId});
            }
        });

    } else {
        response.json({'email': false});
    }
});

app.get('/content-type-detail/:cid', function (request, response) {
    if (request.session.loggedin) {
        connection.query('SELECT * FROM content_types WHERE id = ?', [request.params.cid], function (error, results, fields) {
            if (results && results.length > 0) {
                response.json({contentType: results[0]});
            } else {
                response.json({contentType: {}});
            }
        });
    } else {
        response.json({'email': false});
    }
});


app.listen(5000);