'use strict'

function flatten(arr) {
    return arr.reduce(function(flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten)
            ? flatten(toFlatten)
            : toFlatten);
    }, []);
}

module.exports = {
    isEmpty: function(arr) {
        if (arr.length == 0) {
            return true
        } else {
            return false
        }
    },
    count: function(arr) {
        return arr.length
    },
    head: function(arr) {
        if (arr.length > 0) {
            return arr[0]
        } else {
            return false
        }
    },
    tail: function(arr) {
        if (arr.length > 1) {
            let newArr = []
            for (var i = 1; i < arr.length; i++) {
                newArr.push(arr[i])
            }
            return newArr
        } else if (arr.length == 1) {
            return arr[0]
        } else {
            return false
        }
    },
    flatten: flatten
}
