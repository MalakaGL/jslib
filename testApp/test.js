/**
 * Created by lahiru on 21-Jan-2015.
 */
var expressgl = require('./../expressgl');
var app = expressgl();

app.get('/', function(req, res){
    res.send('hello world');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

app.get('/home', function(req, res){
    res.sendFile('index.html');
});

app.get('/user/([a-z0-9]{5,})', function userIdHandler(req, res) {
    console.log(req);
    res.send('GET');
    res.on('finish', function() {
        console.log('R', req.route);
    });
});

app.listen(3000);
