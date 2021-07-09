var mario, bg, ground;
var bgSprite;

function preload() {
  bg = loadImage ("img/lbl.jpg");
  mario = createImg("img/mario.gif")

}

function setup() {
  createCanvas(850, 500);
  bgSprite = createSprite(500,250,1700,500)
  bgSprite.addImage(bg);
  bgSprite.scale = 2;
  trex = createSprite(50,180,10,10);
//  trex.addImage(mario);
  mario.position(trex.x-25,trex.y-30)

  mario.size(50,50)

  

  /*
  gameover = createSprite(70,85);
  restart=createSprite(70,125);
 // gameover.addImage(gameoverImage);
  //restart.addImage(restartImage);
  gameover.scale = 0.6;
  restart.scale = 0.6;
  gameover.visible=false;
  restart.visible=false;
  //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup();
  cloudsGroup = createGroup();
  
  
  //trex.setCollider("circle",0,0,40);
  
  score = 0;
  */
}

function draw() {
  background(180);

  drawSprites();
}

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
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //adding cloud to the group
   cloudsGroup.add(cloud);
    }
}

