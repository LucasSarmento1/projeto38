var player,moeda;
var moedag;
var score = 0;


function preload(){
  
}
function setup() {
  createCanvas(900,400);
  player=createSprite(50,200,10,50)
  
  moedag=new Group()
}
function draw() {
  background(150,44,44); 
  text("PONTUAÇÃO:"+score,player.x,50)
  if(keyDown(UP_ARROW)){
    player.y=player.y-8;
  }
  if(keyDown(DOWN_ARROW)){
    player.y=player.y+8;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+8;
  }
  camera.position.x=player.x+width/2-100;
  gerarmoedas();
  
  if(moedag.isTouching(player)){
    score=score+3;
    
  }
  
drawSprites();
}

function gerarmoedas(){
  if(frameCount%60===0){
    moeda=createSprite(width,random(5,350),30,30);
    moeda.velocityX=-9;
    moedag.add(moeda);
  }
}