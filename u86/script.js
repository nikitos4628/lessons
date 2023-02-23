'use strict';

// console.log('Запрос данных...');

// setTimeout(() => {
// 	console.log('Подготовка данных...');

// 	const product = {
// 		name: 'TV',
// 		price: 2000
// 	};

// 	setTimeout(() => {
// 		product.status = 'ordered';
// 		console.log(product);
// 	}, 2000);
// }, 2000);


// console.log('Запрос данных...');

// const req = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('Подготовка данных...');
	
// 		const product = {
// 			name: 'TV',
// 			price: 2000
// 		};
	
// 		resolve(product);
// 	}, 2000);
// });

// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = 'ordered';
// 			resolve(product);
// 		}, 2000);
// 	});
// }).then(data => {
// 	data.modify = true;
// 	return data;
// }).then((data) => {
// 	console.log(data);
// }).catch(() => {
// 	console.error('Произошла ошибка');
// }).finally(() => {
// 	console.log('Finally');
// });


// console.log('Запрос данных...');

// const req = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('Подготовка данных...');
	
// 		const product = {
// 			name: 'TV',
// 			price: 2000
// 		};
	
// 		resolve(product);
// 	}, 2000);
// });

// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = 'ordered';
// 			reject();
// 		}, 2000);
// 	});
// }).then(data => {
// 	data.modify = true;
// 	return data;
// }).then((data) => {
// 	console.log(data);
// }).catch(() => {
// 	console.error('Произошла ошибка');
// });


const test = time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time);
	});
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
// 	console.log('All');
// });

Promise.race([test(1000), test(2000)]).then(() => {
	console.log('All');
});