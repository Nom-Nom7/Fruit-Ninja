var sword, swordAnimation;
var fruit,fruitGroup;
var fruit1,fruit2,fruit3,fruit4;
var microbe,microbe1,microbe2;
var microbe,microbeGroup;
var rand1,rand2,rand3;
var gameState = 1;
var play, end;
play =1;
end =2;
var score = 0;
var deaths = 0;
var gameover;

function preload(){
  
  createCanvas(windowWidth,windowHeight);
  
  swordAnimation = loadImage("sword.png");
  gameover = loadImage("gameover.png");
  
  fruit1 = loadAnimation("fruit1.png");
  fruit2 = loadAnimation("fruit2.png");
  fruit3 = loadAnimation("fruit3.png");
  fruit4 = loadAnimation("fruit4.png");
  
  microbe1 = loadAnimation("alien1.png");
  microbe2 = loadAnimation("alien2.png");

}

function setup()  { 
   
  sword = createSprite(windowWidth/2,windowHeight/2,10,10);
  sword.addImage(swordAnimation);
  sword.scale = 0.5;
  
  fruitGroup = new Group();
  microbeGroup = new Group();
}

function draw(){

  background("lightblue");
  
  text("Score =" + score,(windowWidth/2)-25,25);
  text("Deaths =" + deaths,(windowWidth/2)+75,25);  
  
  if(gameState === 1)  {
    
      sword.x = mouseX
      sword.y = mouseY;
      fruits();
      microbes();
  }
  
  if(deaths === 3)  {
    gameState = 2;
}
  
  if(gameState === 2)  {
    fruitGroup.destroyEach();
    microbeGroup.destroyEach();
    score = 0;
    sword.x =200;
    sword.y =200;
    sword.addImage(gameover);
  }
  
  drawSprites();

}

function fruits()  {

  if(World.frameCount% 80 === 0)  {
  fruit = createSprite(windowWidth-25,windowHeight/2,10,10);
    
    rand1 = Math.round(random(1,4));
    
    if(rand1 === 1)  {
      fruit.addAnimation("fruit1",fruit1);
    }
    
    else if(rand1 === 2)  {
      fruit.addAnimation("fruit2",fruit2);
    }
    
    else if(rand1 === 3)  {
      fruit.addAnimation("fruit3",fruit3);
    }
    
    else if(rand1 === 4)  {
      fruit.addAnimation("fruit4",fruit4);
    }
    
    fruit.scale = 0.2;
    
    fruit.y =  Math.round(random(100,windowHeight-100));
    
    fruit.velocityX = -10;
    fruit.lifetime = (windowWidth/fruit.velocityX)*-1;
    
    fruitGroup.add(fruit);
    
  }
  
  if(sword.isTouching(fruitGroup))  {
    fruitGroup.destroyEach();
    score = score + 2;
  }

}

function microbes()  {
  
  rand3 = Math.round(random(100,200));

  if(World.frameCount% rand3 === 0)  {
  microbe  = createSprite(windowWidth-25,windowHeight/2,10,10);
    
    rand2 = Math.round(random(1,2));
    
    if(rand2 === 1)  {
      microbe.addAnimation("microbe1",microbe1);
    }
    
    else if(rand2 === 2)  {
      microbe.addAnimation("microbe2",microbe2);
    }
    
    microbe.y =  Math.round(random(100,windowHeight-100));
    
    microbe.velocityX = -10;
    microbe.lifetime = (windowWidth/microbe.velocityX)*-1;
    
    microbeGroup.add(microbe);
    
  }
    
     if(sword.isTouching(microbeGroup))  {
    fruitGroup.destroyEach();
    microbeGroup.destroyEach();
    deaths = deaths + 1;
  }

}

