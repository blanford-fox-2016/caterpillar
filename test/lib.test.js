'use strict'

const mocha = require('mocha');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect
const should = chai.should()

const lib = require('../lib/lib.js');
const isEmpty = lib.isEmpty
const count = lib.count
const head = lib.head
const tail = lib.tail
const flatten = lib.flatten

describe('isEmpty', function() {
    it('should return true when empty', function() {
        // assert.equal(true, isEmpty([1, 2]));
        expect(isEmpty([])).to.be.equal(true)
    });
});

describe('count', function() {
    it('should return array length', function() {
        expect(count([1, 2, 3])).to.be.equal(3)
        // assert.equal(3, count([1, 2, 3]));
    });
});

describe('head', function() {
    it('should return first value in array', function() {
        assert.equal(1, head([1, 2, 3]));
    });
});

describe('tail', function() {
    it('should return other element than head', function() {
        expect(tail([1, 2, 3])).to.be.eql([2, 3])
    });
});

describe('flatten', function() {
    it('should single', function() {});
    expect(flatten([
        [
            [
                [
                    [
                        [
                            [
                                [
                                    [
                                        [
                                            [1, 2]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ],
        3,
        [
            [
                [
                    [
                        [
                            [
                                [
                                    [
                                        [
                                            [
                                                [
                                                    [4]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ],
        5
    ])).to.be.eql([1, 2, 3, 4, 5])
});
