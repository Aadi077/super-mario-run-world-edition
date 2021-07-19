var mario, bg, ground;
var bgSprite, box,box1;
var boxGroup;
var gameState = "onBox"
var level = 1;
var edges;
var invisibleGround;
var gameOver;
var resetButton;
var score = 0;

function preload() {
  bg1 = loadImage ("img/lbl.jpg");
  bg2 = loadImage ("img/merlionIMg.jpg");
  bg3 = loadImage ("img/lol.jpg");
  bg4 = loadImage ("img/lvl.jpg");
  bg5 = loadImage ("img/lul.jpg");
  gameOverImg = loadImage ("img/gameOVER.png");
  winImage = loadImage ("img/winImg.png");
  marioAnimation=loadAnimation("img/mario1.png","img/mario2.png","img/mario3.png");
 // standingMario = loadImage("img/mario1.png");
  crateImage = loadImage ("img/crate.jpg");
}

function setup() {
  createCanvas(850, 500);
  edges = createEdgeSprites();

  bgSprite = createSprite(850,250,1700,500)
  bgSprite.addImage(bg1);
  bgSprite.scale = 2;
  mario = createSprite(50,180,10,10);
 //mario.addImage(standingMario);
  //mario.scale = 0.9;
 // mario.addAnimation("standing",standingMario);
  //mario.shapeColor = "red";

 mario.addAnimation("flying",marioAnimation);
 // mario.scale = 2;

  box1 = createSprite(mario.x,mario.y+20,50,10);
  box1.addImage(crateImage); 
  box1.scale = 0.1 
  boxGroup = new Group();
  boxGroup.add (box1)
  boxes();
invisibleGround = createSprite(400,490,900,10);
invisibleGround.visible = false;

}

function draw() {
  background(180);
  //console.log(mario.y)
  if (keyDown("space") && gameState == "onBox"){
    jump();
    bgSprite.velocityX = -0.9;
    console.log(mario.velocityX);
  }
  if (keyDown(RIGHT_ARROW)){
    mario.velocityX = 6.0;

  }
  if (keyDown(LEFT_ARROW)){
    mario.velocityX = -3;

  }
    mario.velocityY+=0.1;

mario.collide(boxGroup,stop);
mario.collide(edges[1],levelUp);
mario.collide(edges[3],gameOver);
drawSprites();
}
function jump() {
  mario.velocityX = 1.6;
  mario.velocityY = -3.245358;
  gameState = "fly"

}

function gameOver(){
bgSprite.addImage(gameOverImg);
bgSprite.x = (430);

console.log("Game Over");
mario.remove();
boxGroup.destroyEach();
bgSprite.velocityX = 0;
}

function restart(){
  console.log("im here")
  mario.remove();
  boxGroup.destroyEach();
  bgSprite.addImage(winImage);
  resetButton = createSprite(width/2,height/2,100,100);
  if (mousePressedOver(resetButton)){
    bgSprite.addImage(bg1);
    score = 0
    resetButton.remove()
    reset();
    level = 1;  
  }
}

function reset(){
  mario.remove();
  boxGroup.destroyEach();
  mario = createSprite(50,random(100,300),10,10);

   mario.scale = 2;
   box1 = createSprite(mario.x,mario.y+20,50,10);
   box1.addImage(crateImage); 
   box1.scale = 0.1 
   boxGroup = new Group();
   boxGroup.add (box1)
   boxes();
  bgSprite.velocityX = 0;
}

function levelUp(){
  score+=100
  if (level<=5){
    level+=1
    switch (level){
      case 1:
          bgSprite.addImage(bg1);
          bgSprite.x=850;
          break;
      case 2:
          bgSprite.addImage(bg2);
          bgSprite.x=850;
          break;
      case 3:
          bgSprite.addImage(bg3);
          bgSprite.x=850;
          break;
      case 4:
          bgSprite.addImage(bg4);
          bgSprite.x=850;
          break;
      case 5:
          bgSprite.addImage(bg5);
          bgSprite.x=850;
          break;
      default:break
    }
  }
  else{
    console.log("restart")
    //level = 1;
    restart();
  }

    reset();
}

function stop(){
  mario.velocityX=0;
  mario.velocityY=0;
  gameState = "onBox"
  bgSprite.velocityX = 0;

}

function boxes() {
  var y = 180;
    for (var i = 150;i<850;i+=(random(130,150))){
      box = createSprite(i,y+=(random(-20,20)),50,10);
      box.addImage(crateImage);
      box.scale = 0.1 
      //box.shapeColor = "brown"
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

