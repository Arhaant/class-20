function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green"

  movingRect = createSprite(800, 200, 50, 50);
  movingRect.shapeColor = "green"

  movingRect.velocityX = -3
}

function draw() {
  background(255,255,255);  
  

  //movingRect.x = World.mouseX
  //movingRect.y = World.mouseY

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
     fixedRect.shapeColor = "red"
    movingRect.velocityX =- movingRect.velocityX;
  }
  else{
    fixedRect.shapeColor = "green"
  }

  drawSprites();
}


//movingRect.isTouching(fixedRect)