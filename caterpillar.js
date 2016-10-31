'use strict'
let isEmpty = (arr) => {
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
}

let count = (arr) => {
  return arr.length;
}

let head = (arr) => {
  return arr[0];
}

let tail = (arr) => {
  arr.splice(0, 1);
  return arr;
}

let flatten = (arr) => {
  let flat = [].concat.apply([], arr);
  return flat;
}

console.log(flatten([1, [2, 3], 4, [5, 6, 7]]));

module.exports = {
  isEmpty: isEmpty,
  count: count,
  head: head,
  tail: tail,
  flatten: flatten
}
