// for test
var express = require('express')
var app = express()

var mount = require('./index');

// with path
mount(app, 'plugins', true);


