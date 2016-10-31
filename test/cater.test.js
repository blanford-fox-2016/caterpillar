const mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
const cater = require('../lib/cater');

// console.log(cater.tail([]));

// describe('#isEmpty()', function(){
//   it('it should return true if empty', function(){
//     /* cara equal */
//     assert.equal(true, cater.isEmpty([1]));
//
//     /* cara expect */
//     // expect(cater.isEmpty([])).to.be.true
//   })
// })

// describe('#count()', function(){
//   it('it should return array length', function(){
//     /* cara equal */
//     assert.equal(2, cater.count([1,2]));
//
//     /* cara expect */
//     // expect(cater.count([])).to.be.2
//   })
// })


// describe('#head()', function(){
//   it('it should return value of index 0', function(){
//     /* cara equal */
//     assert.equal(2, cater.head([2,1]));
//     /* cara expect */
//     // expect(cater.head([2,1])).to.be.2
//   })
// })

// describe('#tail()', function(){
//   it('it should return array from index of 1 to array.length', function(){
//     expect(cater.tail([2,1,4])).eql([1,4])
//   })
// })

describe('#flatten()', function(){
  it('it should return array from index of 1 to array.length', function(){
    expect(cater.flatten([1,2,[3,4,[5,6]]])).eql([1,2,3,4,5,6])
  })
})
