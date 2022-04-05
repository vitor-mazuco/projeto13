var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);

// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

createApples();
function createApples( ){
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale=0.007;
apple.velocityY = 3;
apple.lifetime = 150;
}
createOrange();
function createOrange(){
orangeL = createSprite(random(50,350),40,10,10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}
createRed();
function createRed(){
RedL = createSprite(random(50,350),40,10,10);
RedL.addImage(RedImg);
RedL.scale=0.06;
RedL.velocityY = 3;
RedL.lifetime = 150;
}
var select_sprites = math.round(random(1,3));

if (frameCounte % 80 == 0) {
if (select_sprites == 1){
createApples();
} 
}
if (frameCounte % 80 == 0) {
if (select_sprites == 2){
  createOrange();
}
}
if (frameCounte % 80 == 0) {
  if (select_sprites == 3){
  createRed();
}
}
}



function draw() {
  background(0);

rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}
