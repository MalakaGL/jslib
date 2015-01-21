/**
 * Created by lahiru on 21-Jan-2015.
 */
var express = require('./../expressgl');
var app = express();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(3000);