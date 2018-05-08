var switchColor = true;
var canvas = document.getElementById("myCanvas");
var ctx    = canvas.getContext("2d");
var gbutton = document.getElementById("gbutn");
ctx.fillStyle = "red";
canvas.addEventListener("mousemove", onMouseClick, false);
gbutton.addEventListener("click", changeColor);

function changeColor() {
	if(switchColor) {
		ctx.fillStyle = "green";
		switchColor = false;
	} else {
		ctx.fillStyle = "red"
		switchColor = true;
	}	
}

function onMouseClick(evt) {
	var x = evt.clientX;
	var y = evt.clientY;
	ctx.beginPath();
	ctx.arc(x,y,10,0,360);
	ctx.fill();
}
