'use strict'


function flatten(arr){
  return arr.reduce(
    function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

module.exports = {
  isEmpty : function(array){
    return array.length > 0 ? false : true
  },
  count : function(array){
    return array.length;
  },
  head : function(array){
    if (array.length == 0) {
      return 0;
    }
    return array[0];
  },
  tail : function(array){
    if (array.length > 1) {
      array.shift();
      return array;
    }else if(array.length == 1){
      return 0;
    }else{
      return 0;
    }
  },
  flatten : flatten
}
