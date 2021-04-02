var fixedRect, movingRect;
var fixedrect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedrect2=createSprite(300,400,50,50);
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else if(isTouching(movingRect,fixedrect2)){
fixedrect2.shapeColor="red";
movingRect.shapeColor="red";




}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
fixedrect2.shapeColor="green";


 }



  drawSprites();
}
