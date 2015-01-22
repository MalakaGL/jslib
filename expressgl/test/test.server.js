var http = require('http');
var assert = require('assert');
var app = require('./../application');
var router = require('./../router');
var myApp;
describe('Testing server', function () {
    before(function () {
        myApp = app();
        myApp.listen(3000);
    });

    it('Testing get method', function(){
        myApp.get('/',function(req, res){
            res.statusCode=200;
            res.end();
        })
        myApp.post('/post', function(req, res){
            res.statusCode=200;
            res.end();
        })
    });

    it('Server should return 200 for get', function (done) {
        http.get('http://localhost:3000', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });

    it('Server should return 200 for post', function (done) {
        done();
    })
    after(function () {
        myApp.close();
    });
});