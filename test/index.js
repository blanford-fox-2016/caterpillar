const mocha = require('mocha')
const chai = require('chai')
const cater = require('../lib/cater')

expect(console.log(cater.isEmpty([]))).to.be.true