var fixedRect, movingRect, gameobject1, gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1 = createSprite(300,100,50,50);
  gameobject2 = createSprite(400,100,50,50);

  gameobject1.shapeColor = "green";
  gameobject2.shapeColor = "green";

  gameobject1.velocityX = 5;
  gameobject2.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (istouching(movingRect, gameobject2)){ //arguments
    movingRect.shapeColor = "blue";
    gameobject2.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameobject2.shapeColor = "green";
  }
  
 bounceOff(gameobject1, gameobject2);

  drawSprites();
}







