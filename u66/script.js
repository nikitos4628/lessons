// function fun() {
// 	smth = 'string';
// } неправильно, т.к. создается window.smth

// const someRes = getData();
// const node = document.querySelector('.class');

// setInterval(function() {
// 	if (node) {
// 		node.innerHTML = someRes;
// 	}
// }, 1000);

// function outer() {
// 	const potentiallyHugeArray = [];
// 	return function inner() {
// 		potentiallyHugeArray.push('hi');
// 		console.log('hiii');
// 	};
// }

// const sayHello = outer();



function createElement() {
	const div = document.createElement('div');
	div.id = 'test';
	document.body.append(testDiv);
}

createElement();


function deleteElement() {
	document.body.removeChild(document.getElementById('test'));
}

deleteElement();