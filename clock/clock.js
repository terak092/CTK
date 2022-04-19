let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;
let interval = 2;
let yr ;
let mon ;
let dy ;
let hr ;
let minu ;
let scd ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  noStroke();
  colorMode(HSB, 360, 100, 100);

  let clock_radius = min(width, height) / 2;
  secondsRadius = clock_radius * 0.8;
  minutesRadius = clock_radius * 0.6;
  hoursRadius = clock_radius * 0.4;

  x = width / 2;
  y = height / 2;
}

function draw() {
  drawGradient(width/2, height / 2);

  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  stroke(255);
  noFill();
  strokeWeight(2);
  circle(x + cos(s) * secondsRadius, y + sin(s) * secondsRadius, 20);
  strokeWeight(2);
  circle( x + cos(m) * minutesRadius, y + sin(m) * minutesRadius, 20);
  strokeWeight(2);
  circle(x + cos(h) * hoursRadius, y + sin(h) * hoursRadius, 20);

}

function drawGradient(x, y) {
let radius = width/2;
  if(frameCount % (interval * 60) == 0){
  let hue = random(0, 360);
  let saturation = random(75, 100);
  let brightness = random(85, 100);
  for (let r = radius; r > 0; --r) {
    fill(hue, saturation, brightness);
    noStroke();
    ellipse(x, y, r, r);
    hue = (hue + 0.2) % 360;
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
