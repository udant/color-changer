var r = 0;
var g = 50;
var b=255;
var elli;

function setup(){
  createCanvas(1500,400);
}

function draw(){
 
  /*r = map(mouseX,0,1200,0,255);
  b = map(mouseX,0,1200,255,0);
  g = map(mouseX,0,1200,0,0);*/

  r=map(mouseX,0,1500,100,255);
  g =map(mouseX,50,900,50,255);
  b= map(mouseX,0,1500,255,0);
  background( r , g , b );
  fill (b,r,g);
  elli = ellipse(mouseX,200,50,30);
  drawSprites();
}
/*var r = 0;
 var g = 50;
  var b=255;
   function setup(){ 
     createCanvas(1200,400); } 
     function draw(){ 
       r=map(mouseX,0,1200,0,255); 
       g =map(mouseX,50,900,50,100);
        b= map(mouseX,0,1200,255,0);
   background(r,g,b); fill(255); ellipse(mouseX,100,50,50); }*/