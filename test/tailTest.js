const assertEqual = require('../src/assertEqual');
const tail = require('../src/tail')

assertEqual(String(tail(["Hello", "Lighthouse", "Labs"])), String(["Lighthouse", "Labs"]));