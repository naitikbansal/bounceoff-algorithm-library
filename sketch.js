var movingRect;
var go1,go2;
function setup() {
  createCanvas(1200,800);
  go1 = createSprite(400,200,20,20);   
  movingRect = createSprite(500, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  go1.velocityY = +5;
 go2 = createSprite(500,200,20,20);
  go2.velocityY=5;
 
}

function draw() {
  background(0,0,0);  

 bounceOff(movingRect,go2);
  drawSprites();
}

