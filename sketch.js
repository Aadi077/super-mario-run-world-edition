var mario, bg, ground;
var bgSprite, box,box1;
var boxGroup;
var gameState = "onBox"

function preload() {
  bg = loadImage ("img/lbl.jpg");

}

function setup() {
  createCanvas(850, 500);
  bgSprite = createSprite(500,250,1700,500)
  bgSprite.addImage(bg);
  bgSprite.scale = 2;
  mario = createSprite(50,180,10,10);
  mario.shapeColor = "red";
  box1 = createSprite(mario.x,mario.y+20,50,10);
  boxGroup = new Group();
  boxGroup.add (box1)
  boxes();


  
}

function draw() {
  background(180);
  if (keyDown("space") && gameState == "onBox"){
    jump();

  }
  mario.velocityY+=0.1;

mario.collide(boxGroup,stop);
drawSprites();
}
function jump() {
  mario.velocityX = 1.6;
  mario.velocityY = -3.245358;
  gameState = "fly"
}

function stop(){
  mario.velocityX=0;
  mario.velocityY=0;
  gameState = "onBox"
}

function boxes() {
  var y = 180;
    for (var i = 150;i<850;i+=(random(130,150))){
      box = createSprite(i,y+=(random(-20,20)),50,10);
      box.shapeColor = "brown"
      boxGroup.add(box)
    }
}


/*
function spawnObstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6+score/100);
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}
*/


function spawnClouds() {
  //write code here to spawn the clouds
   if (frameCount % 60 === 0) {
     cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = mario.depth;
    mario.depth = mario.depth + 1;
    
    //adding cloud to the group
   cloudsGroup.add(cloud);
    }
}

