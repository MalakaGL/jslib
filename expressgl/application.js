var http = require("http");
var router = require("./router");
var app = this;
app.routes = {};

app.start = function() {
    function onRequest(request, response) {
        router.route(request, response);
    }
    server = http.createServer(onRequest);
    console.log("Server started.");
    server.listen(8888);
};

app.close = function(callback) {
    server.close(callback);
};

app.get = function get(path, callback){
    router.setRoute(path, callback);
};

app.post = function post(path, callback){
    router.setRoute();
}

exports.app = app;