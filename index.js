#!/usr/bin/env node
console.log('Yes hi hello');

var program = require('commander');
var co = require('co');
var fs = require('fs');
var prompt = require('co-prompt');



program
 .arguments('<entry>')
 .parse(process.argv);

var entry = program.args.join(' ');
fs.appendFileSync('mrbub.txt', entry + '\n\n');
console.log('Entry added');


