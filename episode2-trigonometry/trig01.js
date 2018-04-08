//following along with code from:
// https://www.youtube.com/user/codingmath
//it is a great resource, you should check it out!

window.onload = function () {

	var canvas = document.getElementById("canvas"),

		context = canvas.getContext('2d'),
		width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;



	// this will move it down so we can see it on the screen, toggle off to see example
	context.translate(0, height / 2);

	//this flips the y axis becasue it is normally reversed on screens
	//our sin wave will appear as normal
	context.scale(1, -1);

	for (var angle = 0; angle < Math.PI * 2; angle += .01) {

		// console.log(Math.sin(angle));

		var x = angle * 200,
			y = Math.sin(angle) * 200;

		context.fillRect(x, y, 5, 5);
	}



};