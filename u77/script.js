'use strict';

class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	calcArea() {
		return this.height * this.width;
	}
}

class ColoredRectangleWithText extends Rectangle {
	constructor(height, width, text, bgColor) {
		super(height, width);
		this.text = text;
		this.bgColor = bgColor;
	}

	showMyProps() {
		console.log(`Text: ${this.text}, Color: ${this.bgColor}`);
	}
}

const div = new ColoredRectangleWithText(25, 10, 'Hi', 'red');

div.showMyProps();
console.log(div.calcArea());


const square = new Rectangle(10,12);
const long = new Rectangle(20,100);

console.log(square.calcArea());
console.log(long.calcArea());