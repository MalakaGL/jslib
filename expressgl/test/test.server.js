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

    it('Testing get method', function(done){
        myApp.get('/',function(req, res){
            res.statusCode=200;
            res.end();
        });
        myApp.get('/home',function(req, res){
            res.statusCode=200;
            res.end();
        });
        assert.equal(Object.keys(router.routes).length, 2,'Test for route count.');
        done();
    });

    it('Server should return 200', function (done) {
        http.get('http://localhost:3000', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });

    after(function () {
        myApp.close();
    });
});