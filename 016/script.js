'use strict'

let num = 20;

function showFirstMessage (sssd) {
	console.log(sssd);
	let num = 31;
	console.log(num);
	
}

showFirstMessage ('hello');
console.log(num);

function calc(a, b) {
	return (a + b);
};

console.log(calc(4, 3));
console.log(calc(5, 3));
console.log(calc(234, 3));
console.log(calc(11, 3));
console.log(calc(2412, 3));

function ret() {
	let num = 50;
	// 
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

let logger = function() {
	console.log('hellooo');
};

logger();

const calcl = (a, b) => {
	console.log('1');
	return a + b;
};

calcl();