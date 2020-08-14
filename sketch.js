var movingRect, fixedRect

function setup() {
  createCanvas(800,400);
 
  movingRect = createSprite(700,200,80,30);
  fixedRect = createSprite(100,200,30,80);

  fixedRect.velocityX = 3;
movingRect.velocityX = -3
  
  movingRect.shapeColor = "orange";
  fixedRect.shapeColor = "orange";

  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(0,0,0);  

//movingRect.x = mouseX;
//movingRect.y = mouseY;

if (movingRect.x - fixedRect.x<movingRect.width/2 + fixedRect.width/2 && 
  fixedRect.x - movingRect.x<movingRect.width/2 + fixedRect.width/2){
    fixedRect.velocityX = fixedRect.velocityX*-1;
    movingRect.velocityX = movingRect.velocityX*-1
  }

  if (movingRect.y - fixedRect.y<movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y<movingRect.height/2 + fixedRect.height/2){
      fixedRect.velocityY = fixedRect.velocityY*-1;
      movingRect.velocityY = movingRect.velocityY*-1
    }
  drawSprites();

}