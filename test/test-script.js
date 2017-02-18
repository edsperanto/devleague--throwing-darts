const chai = require('chai');
const should = chai.should();
const scoreThrows = require('../scoreThrows.js');

let tests = {
	1: {run: [1, 5, 11], ans: 15},
	2: {run: [15, 20, 30], ans: 0},
	3: {run: [1, 2, 3, 4], ans: 140},
	4: {run: [11, 5, 1], ans: 15},
	5: {run: [30, 20 ,15], ans: 0},
	6: {run: [4, 3, 2, 1], ans: 140}
}

describe('Score Throws', _ => {
	it('should calculate points correctly', () => {
		Object.keys(tests).forEach(num => {
			scoreThrows(tests[num].run).should.deep.equal(tests[num].ans);
		});
	});
	it('should return 0 for empty array', () => {
		scoreThrows([]).should.deep.equal(0);
	});
});
