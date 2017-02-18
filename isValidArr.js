module.exports = function(arr) {
	if(arr instanceof Array === false) return false;
	for(let i = 0; i < arr.length; i++) {
		if(isNaN(Number(arr[i]))) return false;
	}
}
