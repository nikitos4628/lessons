'use strict';

const person = {
	name: 'alex',
	tel: '+56465',
	parents: {
		mom: 'Olga',
		dad: 'Mike'
	}
};

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);