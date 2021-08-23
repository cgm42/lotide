const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false
assertEqual(eqArrays([[1, 2, [[3], 4]], 5, []], [[1, 2, [[3], 4]], 5, []]), true)
assertEqual(eqArrays([false,[[[[[[[[[[[[1]]]]]]]]]]]],9], [false,[[[[[[[[[[[[1]]]]]]]]]]]],9]), true) // => true

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays(["1",2], [1, 2]), true); // => should FAIL
// assertEqual(eqArrays([], []), true); // => should PASS