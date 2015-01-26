var http = require("http");
var router = require("./router");
var methods = ['get', 'post', 'put', 'delete'];

function myApplication(){
}

myApplication.prototype.listen = function(port){
    function onRequest(request, response){
        if(methods.indexOf(request['method'].toLowerCase()) != -1){
            router.route(request, response);
        }
        else{
            console.log('Unknown request method found.');
            response.send('Unknown request method found.');
        }
    }
    server = http.createServer(onRequest);
    server.listen(port);
}

methods.forEach(function (method){
    myApplication.prototype[method] = function get(path, callback){
        router.setRoute(path, callback);
    }
})

function createNewApp(){
    return new myApplication();
}

myApplication.prototype.close = function(callback){
    server.close(callback);
}

module.exports = createNewApp;