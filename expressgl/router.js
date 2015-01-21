var url = require("url"),
    path = require("path"),
    fs = require("fs");

var router = this;
router.routes = {};

router.route = function(request, response) {
    router.routes[request.url](request, response);
}

router.setRoute = function (path, callback){
    router.routes[path]=callback;
}

exports.router = router;