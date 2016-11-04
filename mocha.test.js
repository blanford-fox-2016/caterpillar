'use strict'

const mocha = require('mocha');
let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
const L = require('./library');

// console.log(cater.tail([]));

describe('#isEmpty()', () => {
  it('it should return true if empty',() => {
    /*equal */
    assert.equal(true, L.isEmpty([]));

    /* expect */
    // expect(cater.isEmpty([])).to.be.true
  })
})

describe('#count()', () => {
  it('it should return array length', () => {
    /*  equal */
    assert.equal(2, L.count([1,2]));

    /*expect */
    // expect(cater.count([])).to.be.2
  })
})


describe('#head()', () => {
  it('it should return value of index 0', () => {
    /*equal */
    assert.equal(2, L.head([2,1]));
    /*expect */
    // expect(cater.head([2,1])).to.be.2
  })
})

describe('#tail()', () => {
  it('it should return array from index of 1 to array.length', () => {
    expect(L.tail([2,1,4])).eql([1,4])
  })
})

describe('#flatten()', () => {
  it('it should return array from index of 1 to array.length',() => {
    expect(L.flatten([1,2,[3,4,[5,6]]])).eql([1,2,3,4,5,6])
  })
})
