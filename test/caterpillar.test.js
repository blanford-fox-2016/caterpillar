'use strict'
const mocha = require('mocha');
const chai = require('chai');
const assert = chai.assert;
const caterpillar = require('../caterpillar');
const isEmpty = caterpillar.isEmpty;
const count = caterpillar.count;

describe('isEmpty', () => {
  it('should return true if the array is empty', () => {
    assert.equal(true, isEmpty([]));
  })
})

describe('isEmpty', () => {
  it('should return true if the array is empty', () => {
    assert.equal(true, isEmpty([1, 2]));
  })
})
