'use strict';

// localStorage.setItem('number', 5);

// localStorage.removeItem('number');
// localStorage.clear();

// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
	form = document.querySelector('form'),
	change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
	checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed'){
	form.style.backgroundColor = 'grey';
} 

checkbox.addEventListener('change', () => {
	localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
	if (localStorage.getItem('bg') === 'changed'){
		localStorage.removeItem('bg');
		form.style.backgroundColor = 'white';
	} else {
		localStorage.setItem('bg', 'changed');
		form.style.backgroundColor = 'grey';
	}
});

const persone = {
	name: 'asd',
	age: 123
};

// const serializedPersone = JSON.stringify(presone);
localStorage.setItem('asd123', persone);

console.log(JSON.parse(localStorage.getItem('asd123')));