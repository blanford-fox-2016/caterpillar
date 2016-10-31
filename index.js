'use strict'

const cater = require('./lib/cater');

// var array = [2,3,4];
// console.log(array.shift());
// console.log(array);
// var array = [[0, 1], 1, [[0, 1, 2], 2, 3]];

// console.log(cater.flatten(array));

console.log(cater.flatten([1,2, [3,4, [5,6]]]));
