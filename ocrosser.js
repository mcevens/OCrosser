let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


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

function draw(){
  drawBackground();

  requestAnimationFrame(draw);
}

draw();
