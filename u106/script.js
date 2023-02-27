'use strict';

// try {
// 	console.log('normal');
// 	console.log(s);
// 	console.log('result');
// } catch (error) {
// 	console.log(error);
// 	console.log(error.name);
// 	console.log(error.message);
// 	console.log(error.stack);
// } finally {
// 	console.log('end');
// }

// console.log('still ok');

// document.querySelector('.active').addEventListener('click', () => {
// 	console.log('clicks');
// });

try {
	document.querySelector('.active').addEventListener('click', () => {
		console.log('clicks');
	});
} catch(e) {}

console.log('normal');