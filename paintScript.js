var canvas = document.getElementById("myCanvas");
var green_button = document.getElementById("green");
var blue_button = document.getElementById("blue");
var red_button = document.getElementById("red");
var clear_button = document.getElementById("clear");
var context = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 500;
context.fillStyle = "red";
var paint = false;
var mousePathX = new Array();
var mousePathY = new Array();

canvas.addEventListener("mousedown", function(evt) {
	paint = true;
	mousePathX.push(evt.clientX - this.offsetLeft);
	mousePathY.push(evt.clientY - this.offsetTop);
});

canvas.addEventListener("mousemove", function(evt) {
	if(paint) {
		mousePathX.push(evt.clientX - this.offsetLeft);
		mousePathY.push(evt.clientY - this.offsetTop);
	}
		context.beginPath();
		context.moveTo(mousePathX[0],mousePathY[0]);
		context.lineTo(mousePathX[1],mousePathY[1]);
		context.stroke();
		mousePathX[0] = mousePathX[1];
		mousePathY[0] = mousePathY[1];
		mousePathY.splice(1,1);
		mousePathX.splice(1,1);
});

canvas.addEventListener("mouseup", function() {
	paint = false;
	mousePathY = [];
	mousePathX = [];
});

canvas.addEventListener("mouseleave", function() {
	paint = false;
	mousePathY = [];
	mousePathX = [];
});

green_button.addEventListener("click", function(){
	context.strokeStyle = "green"
});

blue_button.addEventListener("click", function(){
	context.strokeStyle = "blue"
});

red_button.addEventListener("click", function(){
	context.strokeStyle = "red"
});

clear_button.addEventListener("click", function(){
	context.clearRect(0,0,canvas.height,canvas.width);
});