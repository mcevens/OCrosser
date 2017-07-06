let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let ocrosser = new Image();
ocrosser.src = "ocrosser.png";

let sx = 0 ;
let sy = 0 ;
let swidth = 40;
let sheight = 40;
let x = 50;
let y = 444;
let width = 30;
let height = 30;

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let up = true ;
let down = true;
let right = true;
let left = true;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) rightPressed = true;
  if (e.keyCode == 37) leftPressed = true;
  if (e.keyCode == 38) upPressed = true;
  if (e.keyCode == 40) downPressed = true;
}

function keyUpHandler(e){
  if(e.keyCode == 39) {rightPressed = false;}
  if(e.keyCode == 37) {leftPressed = false; }
  if (e.keyCode == 38) {upPressed = false;}
  if (e.keyCode == 40 ) {downPressed = false;}
}


function drawBackground(){

  ctx.fillStyle = "lime" ;
  ctx.fillRect(0, 440, 800, 45);
  ctx.fillRect(0, 220, 800, 45);

  ctx.beginPath();
  ctx.moveTo(0,395);
  ctx.lineTo(800, 395);
  ctx.strokeStyle = "white";
  ctx.setLineDash([5]);
  ctx.strokeWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0,350);
  ctx.lineTo(800,350);
  ctx.strokeStyle= "yellow";
  ctx.setLineDash([0]);
  ctx.strokeWidth = 12;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0,305);
  ctx.lineTo(800,305);
  ctx.strokeStyle = "white";
  ctx.setLineDash([5]);
  ctx.strokeWidth = 2;
  ctx.stroke();


  //drawing water

  ctx.fillStyle = "blue";
  ctx.fillRect(0,0,800,220);
}

function drawOCrosser(){
  ctx.drawImage(ocrosser, sx, sy, swidth, sheight, x, y, width, height);
}

function draw(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  drawBackground();
  drawOCrosser();

  if (upPressed === true && up === true) {
    y = y - 44;
    up = false;
  }

  if(upPressed === false){
    up = true;
  }

  requestAnimationFrame(draw);
}

draw();
