let mocha = require('mocha')
let chai = require('chai')
let should = chai.should()
let expect = chai.expect
let _ = require('../lib/functions')

describe('test function isEmpty', function(){
	it('should return true when empty', function(){
		expect(_.isEmpty([])).to.be.equal(true)
	})
})

describe('test function count', function(){
	it('should return 3 when array consists of 3 values', function(){
		expect(_.count([1,2,3])).to.be.equal(3)
	})
})

describe('test function head', function(){
	it('should return 4 when array consists the values of [4,5,7]', function(){
		expect(_.head([4,5,7])).to.be.equal(4)
	})
})

describe('test function tail', function(){
	it('should return true when empty', function(){
		expect(_.tail([2,3])).to.be.eql([ 3 ])
	})
})

describe('test function flatten', function(){
	it('should return [1,2,3,4,5,6,7] when given parameter of [1, [2,3], 4, [5, [6,7]]]', function(){
		expect(_.flatten([1, [2,3], 4, [5, [6,7]]])).to.be.eql([1,2,3,4,5,6,7])
	})
})