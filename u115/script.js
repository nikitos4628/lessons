setTimeout(() => console.log('timeout'));

Promise.resolve()
	.then(() => console.log('promise'));

queueMicrotask(() => console.log('wow'));

Promise.resolve()
	.then(() => console.log('promise1'));

console.log('code');

// then, catch, finally, await - micro