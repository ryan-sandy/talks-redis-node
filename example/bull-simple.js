/*
 * @file bull-simple.js
 * @author Ryan Lee
 */

'use strict';
/*jshint node:true*/

var queue = require('bull');
var q = queue('simple queue');

q.process(function (job, done) {
  console.log(job.data);
  done();
});

q.add('a job');
