var cater = require('./lib/cater')

console.log("isEmpty")
console.log(cater.isEmpty([1,2,3]))

console.log("count")
console.log(cater.count([1,2,3]))

console.log("head")
console.log(cater.head([1,2,3]))

console.log("tail")
console.log(cater.tail([2,3]))

console.log("flatten")
console.log(cater.flatten([1, [2,3], 4, [5, [6,[7,8,[9,10]]]]]))