var battlefield,battlefieldImg;
var player, capImg, shooting, shootingImg;
var thanos, thanosImg;
var ironman, ironmanImg, shooting2, shotting2Img;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var thanosGroup;



function preload(){
  
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")

  capImg = loadImage("assets/cap.jpg")
  shootingImg = loadImage("assets/shooting.png")

  ironmanImg = loadImage("assets/ironman.png")
  shooting2Img = loadImage("assets/shooting2.jpeg")

  thanosImg = loadImage("assets/thanos.jpeg")

  battlefieldImg = loadImage("assets/battlefield.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  battlefield = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
battlefield.addImage(battlefieldImg)
battlefield.scale = 5
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(capImg)
 player.scale = 7
   player.scale = 0.7
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

ironman = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 ironman.addImage(ironmanImg)
 ironman.scale = 0.1
  ironman.scale = 0.1
   ironman.debug = true
   ironman.setCollider("rectangle",0,0,300,300)

   //creating sprites to depict lives remaining
   heart1 = createSprite(displayWidth-150,40,20,20)
   heart1.visible = false
    heart1.addImage("heart1",heart1Img)
    heart1.scale = 0.4

    heart2 = createSprite(displayWidth-100,40,20,20)
    heart2.visible = false
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.4

    heart3 = createSprite(displayWidth-150,40,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.4
   

    //creating group for thanos    
    thanosGroup = new Group();
}

function draw() {
  background(0); 

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}

if(keyDown("W")||touches.length>0){
  ironman.y = ironman.y-30
}
if(keyDown("S")||touches.length>0){
 ironman.y = ironman.y+30
}

//release bullets and change the image of captain america to shooting position when space is pressed
if(keyWentDown("space")){
  player.addImage(shootingImg)
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(capImg)
}

if(keyWentDown("e")){
  ironman.addImage(shooting2Img)
}
else if(keyWentUp("e")){
  ironman.addImage(ironmanImg)}

//destroy thanos when player touches it
if(thanosGroup.isTouching(player)){
 

 for(var i=0;i<thanosGroup.length;i++){     
      
  if(thanosGroup[i].isTouching(player)){
    thanosGroup[i].destroy()
       } 
 }
}

if(thanosGroup.isTouching(ironman)){
 

  for(var i=0;i<thanosGroup.length;i++){     
       
   if(thanosGroup[i].isTouching(ironman)){
     thanosGroup[i].destroy()
        } 
  }
 }

//calling the function to spawn thanoses
enemy();

drawSprites();
}



//creating function to spawn thanoses
function enemy(){
  if(frameCount%50===0){

    //giving random x and y positions for thanos to appear
    thanos = createSprite(random(500,1100),random(100,500),40,40)

    thanos.addImage(thanosImg)
    thanos.scale = 0.6
    thanos.velocityX = -3
    thanos.debug= true
    thanos.setCollider("rectangle",0,0,400,400)
   
    thanos.lifetime = 400
    thanosGroup.add(thanos)
  }

}  
