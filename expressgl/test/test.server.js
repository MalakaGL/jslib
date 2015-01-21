var http = require('http');
var assert = require('assert');
var app = require('./../application');
var router = require('./../router');

describe('Testing server', function () {
    before(function () {
        app.start();
    });

    it('Testing get method', function(done){
        app.get('/',function(req, res){
            res.statusCode=200;
            res.end();
        });
        app.get('/home',function(req, res){
            res.statusCode=200;
            res.end();
        });
        assert.equal(Object.keys(router.routes).length, 2,'Test for route count.');
        done();
    });

    it('Server should return 200', function (done) {
        http.get('http://localhost:8888', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });

    after(function () {
        app.close();
    });
});