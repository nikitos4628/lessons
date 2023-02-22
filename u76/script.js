'use strict';

// function showThis() {
// 	console.log(this);
// }

// showThis();

// 1) Обычная функция: this = window, но если стоит use strict - undefined


// function showThis2(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return this.a + this.b;
// 	}

// 	console.log(sum());
// }

// showThis2(4, 5);


// function showThis2(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}

// 	console.log(sum());
// }

// showThis2(4, 5);

// 2) Контекст у методов объекта - сам объект

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		console.log(this);
// 	}
// };

// obj.sum();

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	}
// };

// obj.sum();

// 3) this в конструкторах и классах - это новый экземпляр объекта

// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log(`Hello ${this.name}`);
// 	};
// }

// let ivan = new User('Ivan', 23);

// 4)

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// const user = {
// 	name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// 4) Ручная привязка this: call, apply, bind

// function count(num) {
// 	return this/num;
// }

// const double = count.bind(10);
// console.log(double(1));
// console.log(double(100));

// 

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// 	console.log(this);
// });

const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
// 	this.style.backgroundColor = 'red';
// });

// btn.addEventListener('click', ()  => {
// 	this.style.backgroundColor = 'red';
// });

btn.addEventListener('click', (e)  => {
	e.target.style.backgroundColor = 'red';
});

// У СТРЕЛОЧНОЙ ФУНКЦИИ НЕТ СВОЕГО КОНТЕКСТА ВЫЗОВА, ОНА ВСЕГДА БЕРЕТ ЕГО У СВОЕГО РОДИТЕЛЯ

// const obj = {
// 	num: 5,
// 	sayNumber: function() {
// 		const say = () => {
// 			console.log(this);
// 		};

// 		say();
// 	}
// };

// obj.sayNumber();


// const obj = {
// 	num: 5,
// 	sayNumber: function() {
// 		const say = () => {
// 			console.log(this.num);
// 		};

// 		say();
// 	}
// };

// obj.sayNumber();


// Пример с обычной функцией

// 'use strict';

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	}
// };

// obj.sum();

// Пример с обычной функцией


// const double = (a) => {
// 	return a * 2;
// }

// const double1 = (a) => a * 2;

// const double2 = a => a * 2;
// console.log(double2(4));