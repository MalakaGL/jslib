/**
 * Created by lahiru on 21-Jan-2015.
 */
var http = require('http'),
    fs = require('fs');

http.ServerResponse.prototype.send = function(str){
    this.writeHeader(200, {"Content-Type": "text/plain"});
    this.write(str);
    this.end();
}

http.ServerResponse.prototype.sendFile = function(str){
    var content = fs.readFileSync(str);
    this.writeHead(200, {'Content-Type': 'text/html'});
    this.end(content);
}

module.export = http;