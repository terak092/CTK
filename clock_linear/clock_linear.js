let interval = 2;
let yr ;
let mon ;
let dy ;
let hr ;
let minu ;
let scd ;
let c1,c2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  noStroke();
  colorMode(HSB, 360, 100, 100);

  x = width / 2;
  y = height / 2;
}

function draw() {
  drawGradient(0, 0, width, height, c1,c2, 1);
  
  translate(width*0.23, height*1.42);
  rotate(-PI / 2.0);
  strokeWeight(8);
  stroke(255);
  
  noFill();
  let end1 = map(second(), 0, 60, 0, TWO_PI);
  arc(width/2, height/2, width*0.5, width*0.5, 0, end1);
  
  let end2 = map(minute(), 0, 60, 0, TWO_PI);
  arc(width/2, height/2, width*0.4, width*0.4, 0, end2);
  
  let end3 = map(hour() % 12, 0, 12, 0, TWO_PI);
  arc(width/2, height/2, width*0.3, width*0.3, 0, end3);

}

function drawGradient(x, y,w, h, c1, c2, axis) {
  strokeWeight(2);
  let radius = width;
  if(frameCount % (interval * 60) == 0){
  let hue_1 = random(0, 360);
  let saturation_1 = random(75, 100);
  let brightness_1 = random(85, 100);
  let hue_2 = random(0, 360);
  let saturation_2 = random(75, 100);
  let brightness_2 = random(85, 100);
  
  c1 = color(hue_1, saturation_1, brightness_1);
  c2 = color(hue_2, saturation_2, brightness_2);
  
  //for (let r = radius; r > 0; --r) {
    fill(hue, saturation, brightness);
    noStroke();
    rect(x, y, width, height);
    hue = (hue + 0.2) % 360;
    
  for (let i = x; i <= x + w; i++) {
  let inter = map(i, x, x + w, 0, 1);
  let c = lerpColor(c1, c2, inter);
  stroke(c);
  line(i, y, i, y + h);
  }
  }

  fill(255);
  let yr = year();
  let mon = month();
  let dy = day();
  let hr = hour();
  let minu = minute();
  let scd = second();
  textFont("monospace");
  textSize(36);
  text(yr + '/' + mon + '/' + dy, width/2, height/2)
  text(hr + ':' + minu , width/2, height/2+36)

}
