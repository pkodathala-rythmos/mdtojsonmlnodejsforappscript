var express = require('express');
var request = require('request');
var fs = require('fs');
var bodyParser = require('body-parser').json();
const MT = require('mark-twain');

var app = express();
//app.use(express.static(path.join(__dirname, 'app')));
app.post('/convert',bodyParser, function(req, res) {
    console.log('received data: ' + req.body);
    request.get(req.body.filePath, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var content = body;
          var result= MT(content);
          res.send(result.content);
        }
    });
});
app.listen(3001);
console.log('Listening on port 3001...');