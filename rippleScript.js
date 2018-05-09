var height = 100;
var width  = 100;
var dampening = 0.9;
var q;
var canvas = document.getElementById("myCanvas");
canvas.addEventListener("click", onMouseClick);
canvas.height = height;
canvas.width = width;
var oldBuffer;
var newBuffer;
var context = canvas.getContext("2d");
context.strokeStyle = "black";
var pixel = context.createImageData(1,1);
pixel.data[3] = 255;

function setup() {
	oldBuffer = new Array(height);
	newBuffer = new Array(height);
	for(var i = 0 ; i < height ; i++) {
		oldBuffer[i] = new Array(width);
		newBuffer[i] = new Array(height);
	}

	for(var i = 0 ; i < height ; i++) {
		for(var j = 0 ; j < width ; j++) {
			newBuffer[i][j] = 0;
			oldBuffer[i][j] = 0;
		}
	}
	window.requestAnimationFrame(draw);
};

function onMouseClick(evt) {
	var x = evt.clientX - canvas.offsetLeft;
	var y = evt.clientY - canvas.offsetTop;
	newBuffer[x][y] = 100000;
}

function draw() {
	context.clearRect(0,0,width,height);
	for(var i = 1 ; i < height - 1 ; i++) {
		for(var j = 1 ; j < width - 1 ; j++) {
			newBuffer[i][j] = (oldBuffer[i+1][j] + oldBuffer[i-1][j] + oldBuffer[i][j+1] + oldBuffer[i][j-1])/2 - newBuffer[i][j];
			newBuffer[i][j] *= dampening;
		}
	}

	for(var i = 0 ; i < height ; i++) {
		for(var j = 0 ; j < width ; j++) {
				if(newBuffer[i][j] > 255) {
					color = 255;
				} else {
					color = newBuffer[i][j];
				}
				pixel.data[0] = color;
				pixel.data[1] = color;
				pixel.data[2] = color;
				context.putImageData(pixel, i, j);
			
		}		
	}

	var temp = oldBuffer;
	oldBuffer = newBuffer;
	newBuffer = temp;
	window.requestAnimationFrame(draw);
}
setup();
