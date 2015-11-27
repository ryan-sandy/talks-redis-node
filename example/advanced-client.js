/*
 * @file advanced-client.js
 * @author Ryan Lee
 * @copyright 2015 ERAS/Educational Research and Services
 * Reproduction of this material strictly prohibited.
 */

'use strict';
/*jshint node:true*/

var queue = require('bull');
var Promise = require('bluebird');
var q = queue('advanced');

var array = new Array(10); 

Promise.each(array, function (val, i) {
  return q.add({'userId' : i});
}).then(function () {
  console.log('all jobs added');
  q.close();
});
