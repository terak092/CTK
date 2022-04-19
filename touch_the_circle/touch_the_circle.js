
var ballSize = 50;
var posx = 200;
var posy = 200;
var score = 0;

function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(255);
  fill(0);
  textSize(48);
  text("score: "+score,20,40);
  var distToBall = dist(posx,posy,mouseX,mouseY);

  if(distToBall < ballSize/2){
    posx = random(width);
    posy = random(height);
    score = score + 1;
  } else {
    noStroke();
    fill(150, 150, 250);
  }
    
  ellipse(posx, posy, 40);
}
