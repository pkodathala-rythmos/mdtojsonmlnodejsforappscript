'use strict';

module.exports = require('./src/MT');

const MT = require('mark-twain');
const fs = require('fs');
const jsonML = MT(fs.readFileSync('C:\\Learning\\Gdoc\\Gdoc\\OutgoingDocxFiles\\unity-end.md').toString());
