module.exports = {
	isEmpty: isEmpty,
	count: count,
	head: head,
	tail: tail,
	flatten: flatten
}

function isEmpty(arr){
	if(arr.length>0){
		return false
	} else {
		return true
	}
}

function count(arr){
	return arr.length
}

function head(arr){
	return arr[0]
}

function tail(arr){
	var arr_tail = arr.splice(1)	
	return arr_tail
}

function flatten(arr){
	var flat = flatten_loop(arr,[])
	return flat
}

function flatten_loop(arr,result) {
	
	for (a in arr) {
		if(typeof arr[a] === "object"){
			flatten_loop(arr[a],result)
		} else{
			result.push(arr[a])
		}
	}
	return result
}