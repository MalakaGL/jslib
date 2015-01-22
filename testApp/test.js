/**
 * Created by lahiru on 21-Jan-2015.
 */
var expressgl = require('./../expressgl');
var app = expressgl();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(3000);