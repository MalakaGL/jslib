var http = require("http");
var router = require("./router");

function myApplication(){
}

myApplication.prototype.listen = function(port) {
    function onRequest(request, response) {
        router.route(request, response);
    }
    server = http.createServer(onRequest);
    console.log("Server started.");
    server.listen(port);
}

myApplication.prototype.close = function(callback) {
    server.close(callback);
}

myApplication.prototype.get = function get(path, callback){
    router.setRoute(path, callback);
}

myApplication.prototype.post = function post(path, callback){
    router.setRoute();
}

function createNewApp(){
    return new myApplication();
}

module.exports = createNewApp;