let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let ocrosser = new Image();
ocrosser.src = "ocrosser.png";

let car = new Image();car.src = "ocrosserCars2.png";
let carX1 = 100;
let carSX1 = 0;
let carY1 = 400;
let carWidth = 60;
let carHeight = 35;
let carX2 = 500;
let carSX2 = 60;
let carY2 = 400;

let templateWidth = 1142;
let templateHeight = 635;
let templateRow = 4;
let templateCol = 12;

let actorWidth = templateWidth / templateCol;
let actorHeight = templateHeight / templateRow;

let actorUnitXPos = 0;
let actorUnitYPos = templateHeight - actorHeight;

let actorDInitXPos = 0 ;
let actorDInitYPos = 0 ;

let actorRInitXPos = 0 ;
let actorRInitYPos =  templateHeight - 2 * actorHeight;

let actorLInitXPos = 0 ;
let actorLInitYPos = templateHeight - 3 * actorHeight ;

let sx = actorUnitXPos ;
let sy = actorUnitYPos ;

let swidth = actorWidth;
let sheight = actorHeight;
let x = 50; //Image position in canvas
let y = 444; //Image Position in canvas
let width = 50;
let height = 50;

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

function moveOCrosser() {
  if (upPressed === true && up === true && y > 20) {
    y = y - 44;
    up = false;
    sx= actorUnitXPos;
    sy= actorUnitYPos;
  }

  if(upPressed === false){
    up = true;
  }

  if (downPressed === true
    && down === true
    && y + height < canvas.height - 80) {

    y = y + 44;
    down = false;
    sx = actorDInitXPos;
    sy = actorDInitYPos;
  }

  if(downPressed === false){
    down = true;
  }

  if (rightPressed === true
    && right === true
    && x + width < canvas.width - 20
    ){
    x = x + 44 ;
    right = false;
    sx = actorRInitXPos;
    sy = actorRInitYPos;
  }

  if (rightPressed === false){
    right = true;
  }

  if (leftPressed === true
    && left === true
    && x > 20
    ){
    x = x - 44 ;
    left = false;
    sx = actorLInitXPos;
    sy = actorLInitYPos;
  }

  if (leftPressed === false){
    left = true;
  }
}

function draw(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  drawBackground();
  drawOCrosser();
  moveOCrosser();
  drawCars();
  runOver();

  requestAnimationFrame(draw);
}

function drawCars(){
  ctx.drawImage(car,carSX1,0,60,35,carX1,carY1,carWidth,carHeight);

  if (carX1 < canvas.width + 100) {
      carX1 = carX1 + 5;
  }else {
    carX1 = -100;
    carSX1 = (Math.floor(Math.random() * 4)) * 60;
  }

  ctx.drawImage(car,carSX2,0,60,35,carX2,carY2,carWidth,carHeight);

  if (carX2 < canvas.width + 100) {
      carX2 = carX2 + 5;
  }else {
    carX2 = -100;
    carSX2 = (Math.floor(Math.random() * 4)) * 60;
  }
}

function runOver(){

  let carsX = [carX1, carX2];
  let carsY = [carY1, carY2];

  for (let i = 0; i < carsX.length; i++) {
    if( carsX[i] <= x + width &&
      carsX[i] + carWidth >= x &&
      carsY[i] + carHeight >= y &&
      carsY[i] <= y + height){
        y = 488;
      }
  }
 }

draw();
