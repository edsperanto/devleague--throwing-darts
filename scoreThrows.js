module.exports = function(arr) {
	if(arr.length === 0) return 0;
	return arr.reduce((prev, rad, idx) => {
		if(rad < 5) prev.pts += 10;
		if(rad >= 5 && rad <= 10) prev.pts += 5;
		if(rad > 10) prev.perfect = false;
		if(idx === arr.length - 1) {
			if(prev.perfect) prev.pts += 100;
			return prev.pts;
		}
		return prev;
	}, {pts: 0, perfect: true});
}
