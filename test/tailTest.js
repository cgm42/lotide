const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = tail(["hello", "lighthouse", "labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "lighthouse");
assertEqual(result[1], "labs");

assertEqual(tail([5, 6, 7]).join(''), [6, 7].join(''));
