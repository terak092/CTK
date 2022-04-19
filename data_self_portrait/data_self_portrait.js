function setup() {
createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(255);
     
  noStroke();
  fill(0);
  //my brothers' ages
  rect(windowWidth-100, windowHeight/6, 30, 5*windowHeight/6);
  rect(windowWidth-150, windowHeight/3, 30, 2*windowHeight/3);

  fill(114, 28, 222);
  //2/3 of the places I've lived in are in Japan
  triangle(0,0,0,windowHeight,2*windowWidth/3,0);
  
  fill(0);
  //one of my dogs was in my life from when I was 8 until late last year
  triangle(windowWidth-35, 10*windowHeight/18 ,windowWidth, windowHeight/18 ,windowWidth,10*windowHeight/18 );
  
  fill(100);
  //we got my other dog last year and shes been with my family since
  triangle(windowWidth-35, windowHeight/18 ,windowWidth, 0 ,windowWidth, windowHeight/18);
  
  fill(4, 17, 243);
  //my phone usage time is 314 minutes on average and 1177 minutes on my laptop
  triangle(0,314,0,windowHeight,1177,windowHeight);
  
  fill(188, 0, 45);
  //Flag of Japan
  circle(windowWidth/2, windowHeight/2, 500);
  
  fill(225, 0, 27);
  //there is a 13 hour time difference
  arc(windowWidth/2, windowHeight/2, 500, 500, 0, PI + PI/6);
  
  stroke(255, 158, 0);
  strokeWeight(20);
  //my height in inches and cm
  line(63, windowHeight, 163, 0);
  
  strokeWeight(2);
  let numSquares1 = 18;
  //age
  let circleHeight;
  circleHeight = windowHeight/numSquares1;
  translate(windowWidth-35,25);
for(let y1 = 0; y1 < numSquares1; y1++){
      push();
      stroke(0);
      fill(255);
      translate(0,y1*circleHeight);
      circle(10, 10, circleHeight/2);
      pop();
    }
  
  //I am subscribed to/follow 600 youtubers/streamers
  let numSquares = 25;
  translate(-3*windowWidth/9,555);
  let squareWidth = 20;
  let squareHeight = 20;
  for(let x = 0; x < numSquares; x++){
    for(let y = 0; y < 24; y++){
      push();        
      translate(x*squareWidth, y*squareHeight);
      noStroke();
      fill(216, 163, 255)
      circle(0, 0, squareWidth/2);
      pop();
    }
  }
}
