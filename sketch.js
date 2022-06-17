var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400,200,50,80);
  movingRect=createSprite(300,100,50,80);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="blue";
  
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
  movingRect.x - fixedRect.x <=movingRect.width/2 + fixedRect.width/2
  && fixedRect.y - movingRect.y<= fixedRect.height/2 + movingRect.height/2 &&
  movingRect.y - fixedRect.y<= movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
  movingRect.shapeColor="blue";
  }
  drawSprites();
}