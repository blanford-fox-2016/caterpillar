'use strict'
const assert = require('assert');
const C = require('./camda');


// a variable
let empty   = [],
    fill    = [1,2,3,4],
    nested  = [1,2,[3,4]];



// Manual Testing


// isEmpty
console.log(C.isEmpty(empty)); // true []
console.log(C.isEmpty(fill));  // false

// count
console.log(C.count(empty));  // 0
console.log(C.count(fill));   // 4
console.log(C.count(nested)); // 3

// head
console.log(C.head(empty));   // []
console.log(C.head(fill));    // [1]

// tail
console.log(C.tail(fill));    // [ 2, 3, 4 ]
console.log(C.tail(nested));  // [ 2, [ 3, 4 ] ]

// flatten
console.log(C.flatten(fill)); // [ 1, 2, 3, 4 ]
console.log(C.flatten(nested)); //[ 1, 2, 3, 4 ]
