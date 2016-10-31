var _ = require('./lib/functions')

console.log(_.isEmpty([])) //true
console.log(_.isEmpty([1,2])) //false

console.log(_.count([])) //return 0
console.log(_.count([1,2,3])) //return 3

console.log(_.head([1,2,3])) //return 1
console.log(_.head([4,5,7])) // return 4

console.log(_.tail([1,2,3])) //return [2,3]
console.log(_.tail([2,3])) //return [3]

console.log(_.flatten([1, [2,3], 4, [5, [6,7]]])) //return [1,2,3,4,5,6,7]