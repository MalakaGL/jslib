/**
 * Created by lahiru on 21-Jan-2015.
 */
var expressgl = require('./../expressgl');
var app = expressgl();

app.get('/', function(req, res){
    res.send('hello world');
});

app.get('/home', function(req, res){
    res.sendFile('index.html');
});

app.listen(3000);