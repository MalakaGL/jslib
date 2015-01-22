var url = require("url"),
    path = require("path"),
    fs = require("fs")
    http = require('./res');

var router = this;
router.routes = {};
var methods = ['GET', 'POST', 'PUT', 'DELETE'];

router.route = function(request, response) {
    if(request.url != '/favicon.ico' && routes[request.url.toLowerCase()])
        router.routes[request.url.toLowerCase()](request, response);
    else
        response.send('404 page not found.')
}

router.setRoute = function (path, callback){
    router.routes[path.toLowerCase()]=callback;
}

exports.router = router;