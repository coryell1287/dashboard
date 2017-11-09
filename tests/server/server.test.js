const express = require('express');
const request = require('supertest');

// import express from 'express';

describe('server.listen()', function () {
  it('should wrap the http.Server', function (done) {

    const app = express();

    app.use(function (req, res) {
      res.end();
    });

    app.listen(0, function(){
      request(app)
      .get('/')
      .expect(200, done);
    });

  });
});
