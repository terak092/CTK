function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(25);
   slider = createSlider(1, 5, 1, 1);
  slider.position(10, 10);
  slider.style('width', '300px');
}


function draw() {
  let val = slider.value();
  push();
  translate(width/2, height/2);
  translate(p5.Vector.fromAngle(millis() / 900, 20))
  rotate(radians(frameCount));
  let scale_x = sin(map(frameCount%1000, 0, 1000, 0, 2*PI))*3;
  let scale_y = -cos(map(frameCount%1000, 0, 1000, 0, 2*PI))*3;
  scale(val,val);
  triangle(-25, -25, -25, 50, 50, 50);
  pop();
}
