'use strict';

const btns = document.querySelectorAll('button'),
	overlay = document.querySelector('.overlay');

// btn.onclick = function() {
// 	alert('clici');  
// };

// btn.onclick = function() {
// 	alert('second click');  
// };

// let i = 0;
const deleteElement = (e) => {
	console.log(e.target);
	console.log(e.type);

	// i++;
	// if (i == 1) {
	// 	btn.removeEventListener('click', deleteElement);
	// }
	// e.target.remove();
	// console.log('hover');
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
	btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (eventAnyName) => {
	eventAnyName.preventDefault();

	console.log(eventAnyName.target);
});