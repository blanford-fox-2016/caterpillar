'use strict'
function check_flatten(arr, result) {
  arr.forEach(element => {
    if (typeof(element) === 'object') {

      check_flatten(element, result)
    } else {
      result.push(element)
    }
  })
  return result;
}
module.exports = {
  isEmpty: (arr) => {
    return arr.length === 0 ? true : false;
  },

  first: (arr) => {
    return arr.length === 0 ? false : arr[0];
  },

  count: (arr) => {
    return arr.length;
  },

  head: (arr) => {
    return arr.slice(0, 1);
  },

  tail: (arr) => {
    return arr.slice(1, arr.length);
  },

  flatten: (arr) => {
   function check_flatten(arr, result) {
     arr.forEach(element => {
       if (typeof(element) === 'object') {
         check_flatten(element, result)
       } else {
         result.push(element)
       }
     })
     return result;
   }
    return check_flatten(arr, []);
  }

}
