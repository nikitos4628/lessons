// 
// Массив
const arr = [1, 2, 3]; 
const arr1 = ['a', 'b', 'c']; 

const arrObj = {
	0: 'a',
	1: 'b',
	a: 'c',
	abc: {
		abcd: [{},{}],
		def: {
			def1: {
				
			}
		}
	}
};
const d = 'dd';

arrObj.b = 1234;
arrObj['c'] = 12345;

console.log(d);

console.log(arrObj['b']);
console.log(arrObj.b);

console.log(arrObj['c']);
console.log(arrObj.c);

console.log(arr[1]);
console.log(arrObj[1]);
console.log(arrObj.a);

console.log(arrObj);

// 
const arr2 = ['55', '555', '5555'];

arr2[10] = '3456';

console.log(arr2[10]);

console.log(arr2);
// 

const obj = {a: 1, b: 2};
// Объект

const obj1 = {
	Anna: 500,
	'Alice': 800
};
