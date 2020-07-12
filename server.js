var express = require('express'),
 path = require('path'),
 bodyParser = require('body-parser'),
 apiRoutes = require('./server/routes/api'), //api routes
 connection = require("./server/config/db"); //mongodb connection
 
// creating express server
var app = express();
var router = express.Router();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('node_modules'));

app.use(express.static(path.join(__dirname, 'web/build')));
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "web/build", "index.html"));
});

app.use('/', apiRoutes);
 
// starting express server
app.listen(4000, function() {
 console.log("Server is running at : http://localhost:4000");
});
