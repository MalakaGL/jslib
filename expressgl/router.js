var url = require("url"),
    path = require("path"),
    fs = require("fs")
    http = require('./res');

var router = this;
router.routes = {};
router.regex = [];

var methods = ['GET', 'POST', 'PUT', 'DELETE'];

router.route = function(request, response) {

    if(request.url != '/favicon.ico' && router.routes[request.url.toLowerCase()]) {
        router.routes[request.url.toLowerCase()](request, response);
    } else
    {
        var givenUrl = request.url.split('/');
        var isTrue = false;
        for(var i = 0; i < router.regex.length;i++){
            if(givenUrl.length === router.regex[i].length-1){
                for(var j = 0; j < givenUrl.length;j++){
                    console.log('round '+ j + ' '+ router.regex[i][j]);
                    console.log(givenUrl[j]+'\n');
                    if(!givenUrl[j].match(router.regex[i][j]) && router.regex[i][j] != givenUrl[j]){
                        isTrue = false;
                        break;
                    }
                    isTrue=true;
                }
                if(isTrue) {
                    router.regex[i][j](request, response);
                    return;
                }
            }
        }
        console.log('Page not found.' + request.url);
        response.send('404 page not found. '+request.url.toLowerCase());
    }
};

router.setRoute = function (path, callback){
    if(path.indexOf("//") === -1) {
        router.routes[path.toLowerCase()] = callback;
    }else{
        var temp = path.split('//');
        temp.push(callback);
        router.regex.push(temp);
    }
};

exports.router = router;