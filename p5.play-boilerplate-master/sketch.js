var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

}

function draw() {
  background(255,255,255);  
  bullet=createSprite(50,80,50,50)
  bullet.velocityX=speed;
  bullet.shapeColor=color(80,80,80);

  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80);
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
if(damage>10){
  bullet.shapeColor=color(255,0,0);
 }

if(damage<10)
  bullet.shapeColor=color(0,255,0)
 }
  
  drawSprites();
}

  function hasCollided(lbullet,lwall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>wallLeftEdge){
    return true 
  }
    return false
}


  




























