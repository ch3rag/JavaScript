
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
canvas.width = 1920;
canvas.height = 1080;

const HEIGHT_HALF = canvas.height / 2;
const colorA =  "#43C6AC";
const colorB =  "#5B86E5";
const dataURL = canvas.toDataURL();

document.getElementById("canvas-container").style.background = 'url('+dataURL+')';
let _frameCount = 0;
const xCount = 15;
const yCount = 5;
const dX = canvas.width / xCount;
const noise = new SimplexNoise();
let nX = 0;
let nY = 0;
let nZ = 0;
let c1, c2;

function map(x, minX, maxX, minS, maxS) {
  return (minS + (maxS - minS) * x / (maxX - minX));
}
_draw();

function _draw() {
  _frameCount++;
  let t = (_frameCount % 60);
  let swap = (_frameCount % 120);
  if (swap < 60) {c1 = colorA; c2 = colorB} 
  else {c1= colorB, c2 = colorA; }
  let grad = context.createLinearGradient(-canvas.width, 0, canvas.width, canvas.height);
  grad.addColorStop(map(t, 0, 60, 0.33, 0), c1);
  grad.addColorStop(map(t, 0, 60, 0.66, 0.33), c2);
  grad.addColorStop(map(t, 0, 60, 1, 0.66), c1);
  context.fillStyle = "black";
  //context.globalAlpha = 0.2;
  context.fillRect(0, 0, canvas.width, canvas.height);
  //context.fillStyle = grad;
  //context.fillRect(0, 0, canvas.width, canvas.height);
  //context.globalAlpha = 1;
  
  nY = 0;
  context.beginPath();
  for(let i = 0 ; i < yCount ; i++) {
    context.moveTo(0, HEIGHT_HALF);
    nX = 0;
    for(let j = 0 ; j <= xCount ; j++) {
      let y =  HEIGHT_HALF + noise.noise3D(nX, nY, nZ) * 60 - 30;
      let x = j * dX;
      j > 0? context.lineTo(x, y): 0;
      context.moveTo(x, y);
      nX += 0.05;
    }
    nY += 0.06;
  }
  nZ += 0.01;
  context.lineWidth = 10;
  context.strokeStyle = grad;
  context.filter = "blur(1px)";  
  context.stroke();
  context.lineWidth = 2;
  //context.filter = "blur(1px)";  
  context.strokeStyle = "hsl(0, 0%, 100%, 0.8)";
  context.stroke();
  let dataURL = canvas.toDataURL();
  document.getElementById("canvas-container").style.background = 'url('+dataURL+')';
  window.requestAnimationFrame(_draw);
}