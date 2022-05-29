var bg
var bgImg
var ship1
var shipimg
var vil1
var vil1img
var vil2
var vil2img
var vil3
var vil3img
var bullet
var bulletimg
var vilgroup

function setup() {
  createCanvas(windowWidth,windowHeight);
 bgImg= loadImage("assets/background spacs.jpg")
shipimg = loadImage("assets/clipart214298.png")
vil1img = loadImage("assets/clipart4337328.png")
vil2img = loadImage("assets/clipart2186592.png")
vil3img = loadImage("assets/clipart2908532.png")
bulletimg= loadImage("assets/clipart65952.jpg")
vilgroup= new Group()
}
 function preload() {}


function draw() {
 bg = createSprite(900,400)
 bg.addImage(bgImg)
 vil()


  ship1 = createSprite(700,550,100,100)
  
  vil1 = createSprite(700,50,100,100)
  vil2 = createSprite(400,50,100,100)
  vil3 = createSprite(950,50,100,100)
 

  vil1.addImage(vil1img)
  vil1.scale=0.4

  vil2.addImage(vil2img)
  vil2.scale=0.3

  vil3.addImage(vil3img)
  vil3.scale=0.1

 ship1.addImage(shipimg)
  ship1.scale=0.1
 

 
 if(keyWentDown( "space" ) ){
   bullet = createSprite(ship1.x,480,100,100)
   bullet.addImage(bulletimg)
   bullet.velocityY=20
   bullet.scale=0.2
 }
  if(keyDown("RIGHT_ARROW")){

    ship1.x=ship1.x + 550
    
  }
  if(keyDown("LEFT_ARROW")){

    ship1.x=ship1.x - 550
    
  }
  

 drawSprites();


}
  function vil(){
  if(frameCount % 50===0){
    var vil=createSprite(400,165,10,40)
    vil.velocityY= 5
   var rand =Math.round (random(1,3))
   switch(rand){
     case 1 : vil.addImage(vil1)
     break ;
     case 2 : vil.addImage(vil2)
     break;
     case 3 : vil.addImage(vil3)
     break;
     default:break;
   }
   vil.scale=0.5
   vil.lifetime=300
  vilgroup.add(vil)

  }
}
 

  
  


