'use strict';

const data = [
	{
		id: 'box',
		tag: 'div'
	},
	{
		id: 'e',
		tag: 'nav'
	},
	{
		id: 'circle',
		tag: ''
	}
];

// data.forEach((blockObj, i) => {
// 	const block = document.createElement(blockObj.tag);

// 	if (!blockObj.id) throw new Error(`В данных под номером ${i + 1} нет id`);

// 	block.setAttribute('id', blockObj.id);
// 	document.body.append(block);
// });

try {
	data.forEach((blockObj, i) => {
		const block = document.createElement(blockObj.tag);
	
		if (!blockObj.id) throw new SyntaxError(`В данных под номером ${i + 1} нет id`);
	
		block.setAttribute('id', blockObj.id);
		document.body.append(block);
	});
} catch(e) {
	// console.log(e);
	// console.log(e.name);
	// console.log(e.message);
	// console.log(e.stack);

	if (e.name === 'SyntaxError') {
		console.log(e.message);
	} else throw e; 
// 	console.error(e);
// 	console.error(e.name);
// 	console.log(e.message);
// 	console.log(e.stack);
}

// const err = new Error('saef');
// console.log(err.name, err.message, err.stack);
// console.log(err);
// console.log(err.name);
// console.log(err.message);
// console.log(err.stack);

// const err = new SyntaxError('saef');
// console.log(err.name, err.message, err.stack);
