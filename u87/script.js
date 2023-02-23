'use strict';

// API
// DOM API 

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'post',
	body: JSON.stringify({name: 'Alex'}),
	headers: {
		'Content-type': 'application/json'
	}
})
	.then(response => response.json())
	.then(json => console.log(json));