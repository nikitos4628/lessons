'use strict';

const btn = document.querySelector('.btn');
let timerId,
	i = 0;

function myAnimation() {
	const element = document.querySelector('.box');
	let position = 0;
	
	const id = setInterval(frame, 5);
	function frame() {
		if (position == 400) {
			clearInterval(id);
		} else {
			position++;
			element.style.top = position + 'px';
			element.style.left = position + 'px';
		}
	}
}

btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
// 	// const timerId = setTimeout(logger, 2000);
// 	timerId = setInterval(logger, 500);
// });


// function logger () {
// 	if (i === 3) {
// 		clearInterval(timerId);
// 	}
// 	console.log('text');
// 	i++;
// }

// let id = setTimeout(function log() {
// 	console.log('object');
// 	id = setTimeout(log, 500);
// }, 500);