var http = require('http');
var app = require('../src/main').default;
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);
var server = http.createServer(app);

describe('newsController', function() {
    describe('Get news list', function() {
        it('Should return 10 news', function(done) {
            chai.request(server).get('/news').end((err, res)=> {
              chai.should().equal(res.body.length, 10);
              done();
            })
        })
    })

    describe('Get news single', function() {
        it('Should return 1 news with id 3', function(done) {
            chai.request(server).get('/news/3').end((err, res)=> {
              chai.should().equal(res.body.length, 10);
              done();
            })
        })
    })
})