let cycle_period = 1000;
let i = 0;
let num_boxes = 10;
let box_height = 500;
let box_width = 500;
let alpha = 0;
let value = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0, 255, 255);
}

function draw() {
  for(let i = 0; i < num_boxes; i++){
    value = (frameCount%cycle_period)/cycle_period*(2*PI);
    let c = i/num_boxes;
    let j = sin(value+c);
    j *= 10;
    alpha = abs(j)
    let green = map(sin(value+c), -1, 1, 150, 255);
    let red = 0;
    let blue = map(cos(value+c), -1, 1, 200, 250);
    fill(red, green, blue, alpha);
    stroke(0, red, blue, 100+alpha);
    push();
    let draw_box_width = box_width*sin(value+c);
    let draw_box_height = box_height*sin(value+c);
    translate(width/2, height/2);
    let r = map(i, 0, num_boxes, -TWO_PI, TWO_PI);
    rotate(r+value);
    ellipse(0,0,draw_box_width,draw_box_height);
    pop();
  }
}
