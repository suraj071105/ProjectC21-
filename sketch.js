var bullet,wall;
var deformation;
var speed,weight,thickness;

function setup(){
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet = createSprite(40,200,10,5)
  bullet.shapeColor="white";
  wall = createSprite(1500,200,40,height/2);
  wall.shapeColor="purple";
  bullet.velocityX=2;
}

function draw(){
  background("orange");
  


  isCollided();
  drawSprites();
}

function collision(obj1,obj2){
  if(obj1.x-obj2.x<=obj1.width/2+obj2.width/2){
    return true;
  }
  else{
    return false;
  }
}
function isCollided(){

  deformation=0.5*weight*speed*speed/(thickness*thickness*thickness); 
  if (collision(wall,bullet)){
    bullet.x=wall.x-wall.width/2;
  if(deformation<10){
    wall.shapeColor="green";
  }
 else if (deformation>10){
   wall.shapeColor="red";
 }
}
 else{
   wall.shapeColor="purple";  
 }
}