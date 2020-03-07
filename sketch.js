var r = 0;
var g = 50;
var b=255;
var elli;

function setup(){
  createCanvas(1200,400);
}

function draw(){
 
  r = map(mouseX,0,1200,0,255);
  b = map(mouseX,0,1200,255,0);
  g = map(mouseX,0,1200,0,0);
  background( r , g , b );
  fill (b,r,g);
  elli = ellipse(mouseX,200,50,30);
  drawSprites();
}