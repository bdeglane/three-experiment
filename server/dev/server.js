var express = require('express');
var path = require('path');

var app = express();

// load the static folder for resources
app.use(express.static(path.join(__dirname + '/../../dist')));
// run serveur, redirect all route on index.html for express router
app.get('*', function (req, res) {
    // and returning the index.html file
    res.sendFile(path.join(__dirname + '/../../dist/index.html'));
}).listen(3011, function () {
    console.log('Server on port 3011');
});