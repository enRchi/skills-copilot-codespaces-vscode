// create web Server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var path = require('path');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Comments');

// create model
var commentSchema = new Schema({
    name: String,
    comment: String,
    date: { type: Date, default: Date.now }
});

var Comment = mongoose.model('Comment', commentSchema);

// use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set view engine
app.set('views', './views');
app.set('view engine', 'pug');

// set public directory
app.use(express.static('public'));

// set router
app.get('/comments/new', function (req, res) {
    res.render('new');
});

app.get('/comments', function (req, res) {
    Comment.find({}, function (err, comments) {
        if (err) return res.json(err);
        res.render('index', { comments: comments });
    });
});

app.post('/comments', function (req, res) {
    Comment.create(req.body, function (err, comment) {
        if (err) return res.json(err);
        res.redirect('/comments');
    });
});

// set server port
app.listen(3000, function () {
    console.log('Server On!');
});