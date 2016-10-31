'use strict'
//
let isEmpty = (arr) => {
  return arr.length > 0 ? false : true
}

let count = (arr) => {
  return arr.length
}

let head = (arr) => {
  return arr.splice(0,1)
}

let body = (arr) => {
  arr.splice(0,1)
  return arr
}

let flatten = (arr) => {
 function checkflatten(arr, result) {
   arr.forEach(element => {
     if (typeof(element) === 'object') {
       checkflatten(element, result)
     } else {
       result.push(element)
     }
   })
   return result;
 }
  return checkflatten(arr, []);
}


module.exports = {
  isEmpty:isEmpty,count:count,body:body,head:head,flatten:flatten
}
// console.log(isEmpty([]));
// console.log(count([1]));
// console.log(body([4,5]));
// console.log(head([4,5]));
//
// console.log(flatten([1,2,3,[4,5],[4,[4,4]]]));
