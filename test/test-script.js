const chai = require('chai');
const should = chai.should();
const scoreThrows = require('../scoreThrows.js');

let tests = {
	1: {run: [1, 5, 11], ans: 15},
	2: {run: [15, 20, 30], ans: 0},
	3: {run: [1, 2, 3, 4], ans: 140}
}

describe('Score Throws', _ => {
	it('should calculate points correctly', _ => {
		/*
		Object.keys(tests).forEach(num => {
			scoreThrows(tests[num].run).should.deep.equal(tests[num].ans);
		});
		*/
			let test = scoreThrows(tests[1].run);
			let ans = tests[1].ans;
			console.log(test);
			test.should.deep.equal(ans);
	});
});
