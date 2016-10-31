function isEmpty(data) {
    if (data.length == 0) {
        return true
    }
    else {
        return false
    }
}

function first(data) {

}

function count(data) {
    return data.length
}

function head(data) {
    return data[0]
}

function tail(data) {
    var temp = []
    for (var i = 1; i < data.length; i++) {
        temp.push(data[i])
    }
    return temp
}

function flatten(data) {

    var temp = data.reduce(function(a, b) {
        if(typeof b == "object") {
            return a.concat(flatten(b))
        }
        else {
            return a.concat(b);
        }
    }, []);

    return temp


}

module.exports = {
    isEmpty: isEmpty,
    count: count,
    head: head,
    tail: tail,
    flatten: flatten
}