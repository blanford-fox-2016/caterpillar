'use strict'
const mocha = require('mocha');
const chai = require('chai');
const assert = chai.assert;
const caterpillar = require('../caterpillar');
const isEmpty = caterpillar.isEmpty;
const count = caterpillar.count;
const head = caterpillar.head;
const tail = caterpillar.tail;
const flatten = caterpillar.flatten;

describe('isEmpty', () => {
  it('should return true if the array is empty', () => {
    assert.equal(true, isEmpty([]));
  })
})

describe('isEmpty', () => {
  it('should return true if the array is empty', () => {
    assert.equal(false, isEmpty([1, 2]));
  })
})

describe('count', () => {
  it('should return the numbers of value, inside the array', () => {
    assert.equal(5, count([1, 2, 3, 4, 5]));
  })
})

describe('head', () => {
  it('should return the first value of an array', () => {
    assert.equal(1, head([1, 2, 3, 4, 5]));
  })
})
