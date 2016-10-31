'use strict'

const mocha = require('mocha');
const chai = require('chai');
const assert = chai.assert;
const lib = require('../lib/lib.js');
const isEmpty = lib.isEmpty
const count = lib.count
const head = lib.head
const tail = lib.tail

describe('isEmpty', function() {
    it('should return true when empty', function() {
        assert.equal(true, isEmpty([]));
    });
});

describe('count', function() {
    it('should return array length', function() {
        assert.equal(3, count([1, 2, 3]));
    });
});

describe('head', function() {
    it('should return first value in array', function() {
        assert.equal(1, head([1, 2, 3]));
    });
});

describe('tail', function() {
    it('should other element than head', function() {
        assert.equal([3], tail([2, 3]));
    });
});

console.log(tail([2, 3]));
