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
  moveCars();
  requestAnimationFrame(draw);
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

draw();
