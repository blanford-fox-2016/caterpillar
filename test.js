'use strict'

//Lantang library

const L = require('./library');

console.log(L.isEmpty([]));
console.log(L.isEmpty([1]));
console.log(L.count([1]));
console.log(L.body([4,5]));
console.log(L.head([4,5]));
console.log(L.flatten([1,2,3,[4,5],[4,[4,4]]]));
