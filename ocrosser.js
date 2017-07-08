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
let carX3 = 460;
let carSX3 = 120;
let carY3 = 355;

let carX4 = 400;
let carSX4 = 160;
let carY4 = 310;
let carX5 = 360;
let carSX5 = 6;
let carY5 = 265;

let carX6 = 60;
let carSX6 = 120;
let carY6 = 355;
let carX7 = 100;
let carSX7 = 180;
let carY7 =310;
let carX8 = 160;
let carSX8 = 0;
let carY8 = 265;

let logX1 = 300;
let logY1 = 180;
let logWidth = 120;
let logHeight = 30;

let logX2 = 40;
let logY2 = 180;

let logX3 = 100;
let logY3 = 136;

let logX4 = 400;
let logY4 = 136;
let logX5 = 480;
let logY5 = 92;
let logX6 = 60;
let logY6 = 92;
let logX7 = 120;
let logY7 = 48;
let logX8 = 500;
let logY8 = 48;

let padWidth = 30;
let padHeight = 30;
let padX1 = 20;
let padY1 = 4;
let padX2 = 120;
let padY2 = 4;
let padX3 = 220;
let padY3 = 4;
let padX4 = 320;
let padY4 = 4;
let padX5 = 420;
let padY5 = 4;
let padX6 = 520;
let padY6 = 4;

var pad1 = false;
var pad2 = false;
var pad3 = false;
var pad4 = false;
var pad5 = false;
var pad6 = false;

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
  drawLogs();
  moveLogs();
  drawPads();
  drawOCrosser();
  moveOCrosser();
  drawCars();
  moveCars();
  runOver();
  float();
  requestAnimationFrame(draw);
}

function moveLogs(){
  if (logX1 < canvas.width + 100){
    logX1 = logX1 +2;
  }else {
    logX1 = -100;
  }
  if (logX2 < canvas.width + 100){
    logX2 = logX2 +2;
  }else {
    logX2 = -100;
  }
  if (logX3 > 0 - logWidth){
    logX3 = logX3 - 2;
  }else {
    logX3 = canvas.width + 100;
  }
  if (logX4 > 0 - logWidth){
    logX4 = logX4 - 2;
  }else {
    logX4 = canvas.width + 100;
  }
  if (logX5 < canvas.width + 100){
    logX5 = logX5 +3;
  }else {
    logX5 = -100;
  }
  if (logX6 < canvas.width + 100){
    logX6 = logX6 +3;
  }else {
    logX6 = -100;
  }
  if (logX7 > 0 - logWidth){
    logX7 = logX7 - 2;
  }else {
    logX7 = canvas.width + 100;
  }
  if (logX8 > 0 - logWidth){
    logX8 = logX8 - 2;
  }else {
    logX8 = canvas.width + 100;
  }
}

function float(){

  if (logX1 <= x + width &&
    logX1 + logWidth >= x &&
    logY1 + logHeight >= y &&
    logY1 <= y + height){
      if(x < canvas.width - 30){
        x = x +2;
      }
    }
    else if(logX2 <= x + width &&
      logX2 + logWidth >= x &&
      logY2 + logHeight >= y &&
      logY2 <= y + height){
        if(x < canvas.width - 30){
          x = x +2;
        }
    }
    else if(logX3 <= x + width &&
      logX3 + logWidth >= x &&
      logY3 + logHeight >= y &&
      logY3 <= y + height){
        if(x > 0 ){
          x = x -2;
        }
    }
    else if(logX4 <= x + width &&
      logX4 + logWidth >= x &&
      logY4 + logHeight >= y &&
      logY4 <= y + height){
        if(x > 0 ){
          x = x -2;
        }
    }
    else if(logX5 <= x + width &&
      logX5 + logWidth >= x &&
      logY5 + logHeight >= y &&
      logY5 <= y + height){
        if(x < canvas.width - 30 ){
          x = x + 3;
        }
    }
    else if(logX6 <= x + width &&
      logX6 + logWidth >= x &&
      logY6 + logHeight >= y &&
      logY6 <= y + height){
        if(x < canvas.width - 30 ){
          x = x + 3;
        }
    }
    else if(logX7 <= x + width &&
      logX7 + logWidth >= x &&
      logY7 + logHeight >= y &&
      logY7 <= y + height){
        if(x > 0 ){
          x = x -2;
        }
    }
    else if(logX8 <= x + width &&
      logX8 + logWidth >= x &&
      logY8 + logHeight >= y &&
      logY8 <= y + height){
        if(x > 0 ){
          x = x -2;
        }
    }
    else if (y < 220 && y > 44){
		y = 444;

		}
    }
function drawCars(){

  let carsSX = [carSX1, carSX2, carSX3, carSX4, carSX5,carSX6, carSX7, carSX8];
  let carsX = [carX1, carX2, carX3, carX4, carX5, carX6, carX7, carX8];
  let carsY = [carY1, carY2, carY3, carY4, carY5, carY6, carY7, carY8];

  for (let i = 0; i < carsX.length; i++) {
    ctx.drawImage(car,carsSX[i],0,60,35,carsX[i],carsY[i],carWidth,carHeight);
  }


}

function moveCars(){
  if (carX1 < canvas.width + 100) {
      carX1 = carX1 + 5;
  }else {
    carX1 = -100;
    carSX1 = (Math.floor(Math.random() * 4)) * 60;
  }
  if (carX2 < canvas.width + 100) {
      carX2 = carX2 + 5;
  }else {
    carX2 = -100;
    carSX2 = (Math.floor(Math.random() * 4)) * 60;
  }

  if (carX3 > -100) {
      carX3 = carX3 - 5;
  }else {
    carX3 = canvas.width + 100;
    carSX3 = (Math.floor(Math.random() * 4)) * 60;
  }

  if (carX6 > -100) {
      carX6 = carX6 - 5;
  }else {
    carX6 = canvas.width + 100;
    carSX6 = (Math.floor(Math.random() * 4)) * 60;
  }

  if (carX4 < canvas.width + 100) {
      carX4 = carX4 + 5;
  }else {
    carX4 = -100;
    carSX4 = (Math.floor(Math.random() * 4)) * 60;
  }
  if (carX7 < canvas.width + 100) {
      carX7 = carX2 + 5;
  }else {
    carX7 = -100;
    carSX7 = (Math.floor(Math.random() * 4)) * 60;
  }

  if (carX5 > -100) {
      carX5 = carX5 - 5;
  }else {
    carX5 = canvas.width + 100;
    carSX5 = (Math.floor(Math.random() * 4)) * 60;
  }

  if (carX8 > -100) {
      carX8 = carX8 - 5;
  }else {
    carX8 = canvas.width + 100;
    carSX8 = (Math.floor(Math.random() * 4)) * 60;
  }
}

function runOver(){

  let carsX = [carX1, carX2, carX3, carX4, carX5, carX6, carX7, carX8];
  let carsY = [carY1, carY2,carY3, carY4, carY5, carY6, carY7, carY8];


  for (let i = 0; i < carsX.length; i++) {
    if( carsX[i] <= x + width &&
      carsX[i] + carWidth >= x &&
      carsY[i] + carHeight >= y &&
      carsY[i] <= y + height){
        y = 488;
      }
  }
 }


 function drawLogs(){
   ctx.fillStyle = "tan";
   let logsX = [logX1, logX2, logX3, logX4, logX5, logX6, logX7, logX8];
   let logsY = [logY1, logY2, logY3, logY4, logY5, logY6, logY7, logY8];

   for (let i = 0; i < logsX.length; i++) {
     ctx.fillRect(logsX[i], logsY[i], logWidth, logHeight);
   }

 }

 function drawPads(){
	ctx.fillStyle = "seagreen";
	let padsX = [padX1, padX2, padX3, padX4, padX5, padX6];
	let padsY = [padY1, padY2, padY3, padY4, padY5, padY6];

	for (let i = 0; i < padsX.length; i++){
	ctx.fillRect(padsX[i], padsY[i], padWidth, padHeight);
	}
}

function onPad(){
	if (padX1 <= x + width &&
		padX1 + padWidth >= x &&
		padY1 + padHeight >= y &&
		padY1 <= y + height) {
			pad1 = true;
			y = 444;
			}

	else if (padX2 <= x + width &&
			padX2 + padWidth >= x &&
			padY2 + padHeight >= y &&
			padY2 <= y + height) {
				pad2 = true;
				y = 444;
				}

	else if (padX3 <= x + width &&
			padX3 + padWidth >= x &&
			padY3 + padHeight >= y &&
			padY3 <= y + height) {
				pad3 = true;
				y = 444;
				}

	else if (padX4 <= x + width &&
			padX4 + padWidth >= x &&
			padY4 + padHeight >= y &&
			padY4 <= y + height) {
				pad4 = true;
				y = 444;
				}

	else if (padX5 <= x + width &&
			padX5 + padWidth >= x &&
			padY5 + padHeight >= y &&
			padY5 <= y + height) {
				pad5 = true;
				y = 444;
				}

	else if (padX6 <= x + width &&
			padX6 + padWidth >= x &&
			padY6 + padHeight >= y &&
			padY6 <= y + height) {
				pad6 = true;
				y = 444;
				}

	else if (y < 48){
		y = 444;

		}

	var pads = [pad1, pad2, pad3, pad4, pad5, pad6];
	var padsX = [padX1, padX2, padX3, padX4, padX5, padX6];
	var padsY = [padY1, padY2, padY3, padY4, padY5, padY6];

	for (let i = 0; i < pads.length; i++){
		if (pads[i] === true) {
			ctx.drawImage(ocrosser, 0, 0, 40, 40, padsX[i], padsY[i], 30, 30);
		}
	}
}


draw();
