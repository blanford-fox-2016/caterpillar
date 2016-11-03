'use strict'
const assert = require('assert');
const C = require('./camda');


// a variable
let empty   = [],
    fill    = [1,2,3,4],
    nested  = [1,2,[3,4]];



// Testing

// isEmpty
describe('#C.isEmpty',() => {
  it('should return true when the value inside the array is not present', () => {
    assert.equal(true, C.isEmpty(empty));
  });
  it('should return false when the value inside the array is present', () => {
    assert.equal(false, C.isEmpty(fill));
  });
});


// count

describe('#C.count',() => {
  it('should return 0 when the value inside the array is not present', () => {
    assert.equal(0, C.count(empty));
  });
  it(`should return 4 when array has four values inside it`, () => {
    assert.equal(fill.length, C.count(fill));
  });
  it(`should return 3 when array has 3 objects inside it`, () => {
    assert.equal(nested.length, C.count(nested));
  });
});

describe('#C.head',() => {
  it('should return [] when the array has no value', () => {
    assert.deepEqual([], C.head(empty));
  });
  it('should return [1] when the array is [1,2,3,4]', () => {
    assert.deepEqual([1], C.head(fill));
  });

});

describe('#C.tail',() => {
  it('should return [ 2, 3, 4 ] when the array is [1,2,3,4]', () => {
    assert.deepEqual([2, 3, 4], C.tail(fill));
  });
  it('should return [ 2, [ 3, 4 ] ] when the array is [1,2,[3,4]]', () => {
    assert.deepEqual([ 2, [ 3, 4 ] ], C.tail(nested));
  });

});

describe('#C.flatten',() => {
  it('should return [ 1, 2, 3, 4 ] when the array is [ 1, 2, 3, 4 ]', () => {
    assert.deepEqual([ 1, 2, 3, 4 ], C.flatten(fill));
  });
  it('should return [ 1, 2, 3, 4 ] when the array is [ 1, 2, [ 3, 4 ] ]', () => {
    assert.deepEqual([ 1, 2, 3, 4 ], C.flatten(nested));
  });

});




//
// console.log(C.isEmpty(empty)); // true []
// console.log(C.isEmpty(fill));  // false
//
// // count
// console.log(C.count(empty));  // 0
// console.log(C.count(fill));   // 4
// console.log(C.count(nested)); // 3
//
// // head
// console.log(C.head(empty));   // []
// console.log(C.head(fill));    // [1]
//
// // tail
// console.log(C.tail(fill));    // [ 2, 3, 4 ]
// console.log(C.tail(nested));  // [ 2, [ 3, 4 ] ]
//
// // flatten
// console.log(C.flatten(fill)); // [ 1, 2, 3, 4 ]
// console.log(C.flatten(nested)); //[ 1, 2, 3, 4 ]
