

//following along with code from:
// https://www.youtube.com/user/codingmath
//it is a great resource, you should check it out!




window.onload = function () {

	var canvas = document.getElementById("canvas"),

		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;


	//this just makes a black rectangle

	// context.fillRect(0, 0, width, height);

	//we can do something more interesting (Pew! Pew! Laser Show!)
	for (var i = 0; i < 100; i++) {
		context.beginPath();
		context.moveTo(Math.random() * width, Math.random() * height);
		context.lineTo(Math.random() * width, Math.random() * height);
		context.stroke();



	}
};