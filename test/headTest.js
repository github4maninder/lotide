const assertEqual = require('../src/assertEqual');
const head = require('../src/head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "hello");
