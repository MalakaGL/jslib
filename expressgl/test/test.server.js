var http = require('http');
var assert = require('assert');
var app = require('./../application');
var router = require('./../router');
var myApp;

describe('Testing methods\n', function () {
    before(function (done) {
        myApp = app();
        myApp.get('/',function(req, res){
            console.log('GET request received.');
            res.end();
        });
        myApp.post('/post', function(req, res){
            console.log('POST request received.');
            res.send('POST request received.');
        });
        myApp.put('/put', function (req, res) {
            console.log('PUT request received.');
            res.send('PUT request received.');
        });
        myApp.delete('/delete', function (req, res){
            console.log('DELETE request received.');
            res.send('DELETE request received.');
        });
        myApp.get('//user//([a-z0-9]{5,})', function userIdHandler(req, res) {
            console.log('Regular Expression received.');
            res.send('GET');
        });
        myApp.get('//user//([0-9]{5,})', function userIdHandler(req, res) {
            console.log('Regular Expression received.');
            res.send('GET');
        });
        myApp.listen(3000);
        done();
    });

    it('Checking "GET" request.', function (done) {
        http.get('http://localhost:3000', function (res) {
            res.on('data', function (chunk) {
                assert.equal('GET request received.', chunk);
            });
            done();
        });
    });

    it('Checking "POST" request.', function (done) {
        var options = {
            hostname: '127.0.0.1',
            port: 3000,
            path:'/post',
            method: 'POST'
        };
        http.request(options, function(res) {
            res.on('data', function (chunk) {
                assert.equal('POST request received.', chunk);
            });
            done();
        }).end();
    });

    it('Checking "PUT" request.', function (done) {
        var options = {
            hostname: '127.0.0.1',
            port: 3000,
            path:'/put',
            method: 'PUT'
        };
        http.request(options, function(res) {
            res.on('data', function (chunk) {
                assert.equal('PUT request received.', chunk);
            });
            done();
        }).end();
    });

    it('Checking "DELETE" in response method field.', function (done) {
        var options = {
            hostname: '127.0.0.1',
            port: 3000,
            path:'/delete',
            method: 'DELETE'
        };
        http.request(options, function(res) {
            res.on('data', function (chunk) {
                assert.equal('DELETE request received.', chunk);
            });
            done();
        }).end();
    });

    it('Checking 404 in response method field.', function (done) {
        var options = {
            hostname: '127.0.0.1',
            port: 3000,
            path:'/dete',
            method: 'DELETE'
        };
        http.request(options, function(res) {
            assert.equal(200, res.statusCode);
            done();
        }).end();
    });

    it('Checking "GET" request.', function (done) {
        http.get('http://localhost:3000/user/user123', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });

    after(function () {
        myApp.close();
    });
});