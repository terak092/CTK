let circle_x = 300;
let circle_y = 300;
let circle_width;
let circle_direction_x = 1;
let circle_direction_y = 1;
let button_1;

function setup(){
  mode = 0;
  createCanvas(windowWidth,windowHeight);
  colorPicker = createColorPicker('#9669FF');
  colorPicker.position(10,10);
  slider = createSlider(10, 250, 10, 10);
  slider.position(75, 10);
  slider.style('width', '200px');
}

function draw(){
   let circle_width = slider.value();
  ellipse(circle_x,circle_y, circle_width,circle_width);
  circle_x = circle_x + circle_direction_x;
  circle_y = circle_y + circle_direction_y;
  stroke(colorPicker.color());
  fill(255);
  
  if(circle_x > width){
    circle_direction_x = -1;
  }
  if(circle_x < 0){
    circle_direction_x = 1;
  }
    if(circle_y > height){
    circle_direction_y = -1;
  }
  if(circle_y < 0){
    circle_direction_y = 1;
  }
}

function keyPressed(){
    if(key === 'a' || keyCode === LEFT_ARROW || key === 'A'){
        circle_direction_x = -1;
        circle_direction_y = 0;
    }
    if(key === 'd' || keyCode === RIGHT_ARROW || key === 'D'){
        circle_direction_x = 1;
        circle_direction_y = 0;
    }
    if(key === 'w' || keyCode === UP_ARROW || key === 'W'){
        circle_direction_x = 0;
        circle_direction_y = -1;
    }
    if(key === 's' || keyCode === DOWN_ARROW || key === 'S'){
        circle_direction_x = 0;
        circle_direction_y =1;
    }
    if(key === 'q'){
        circle_direction_x = -1;
        circle_direction_y =-1;
    }
    if(key === 'e'){
        circle_direction_x = 1;
        circle_direction_y =-1;
    }
    if(key === 'z'){
        circle_direction_x = -1;
        circle_direction_y =1;
    }
    if(key === 'x'){
        circle_direction_x = 1;
        circle_direction_y =1;
    }
    if(key === 'p' || keyCode === ESCAPE || key === 'P'){
      circle_direction_x = 0;
      circle_direction_y = 0;
    }
    

}
