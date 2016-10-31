const mocha = require('mocha')
const expect = require('chai').expect
const cater = require('../lib/cater')

describe("Test isEmpty", () => {
    it("returns true if cater is empty", () => {
        expect(cater.isEmpty([])).to.be.true
    })
})

describe("Test count", () => {
    it("returns true if count is 3", () => {
        expect(cater.count([1,2,3])).equal(3)
    })
})

describe("Test head", () => {
    it("returns true if head is 1", () => {
        expect(cater.head([1,2,3])).equal(1)
    })
})

describe("Test tail", () => {
    it("returns true if tail is 3", () => {
        expect(cater.tail([1,2,3])).equal(3)
    })
})

describe("Test flatten", () => {
    it("returns true if flatten is [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
        expect(cater.flatten([1, [2,3], 4, [5, [6,[7,8,[9,10]]]]])).eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
})

