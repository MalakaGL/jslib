/**
 * Created by lahiru on 21-Jan-2015.
 */
var http = require('http');

http.ServerResponse.prototype.send = function(str){
    this.writeHeader(200, {"Content-Type": "text/plain"});
    this.write(str);
    this.end();
}

module.export = http;