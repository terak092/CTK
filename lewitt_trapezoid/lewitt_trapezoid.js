function setup() {
  createCanvas (1024, 1024);
 let bottom_length = 500;
 let top_length = bottom_length/2;
 let left_side = 1.5*top_length;
 let right_side;
 let left_top_x = 0;
 let right_top_y = 0;
 fill(255);
 stroke(0);
 rect(1, 1, width-1, height-1,);

 //stroke(0, 0, 255);
 //line(width/4,0,width/4,height)

 //line(width/2,0,width/2,height)
  
 //line(3*width/4,0,3*width/4,height)
 
 //line(0,height/4,width,height/4)
  
 //line(0,height/2,width,height/2)
  
 //line(0,3*height/4,width,3*height/4)

 x = (width/2)/2
 y = (height/2)/2/2
 x1 = (width/2)/2
 y1 = 0;
 stroke(0);
 //line_1 = line(x,y, x1, y1);
 
 x = (width/2)/2
 y = (height/2)/2/2
 x1 = width;
 y1 = (height/2)/2
 line_2 = line(x, y, x1, y1);

 x = 3*width/2/2/2
 y =  0
 x1 = 3*width/2/2/2; 
 y1 = 3*height/4;
 //line_3 = line (x,y,x1,y1);
 
 x = 3*width/4
 y = 0
 x1 = width/2
 y1 =height/2
 line_4 = line (x,y,x1,y1);

 x = width/2
 y = height/2
 x1 = width/2/2
 y1 = 3*height/2/2
 line_5 = line (x,y,x1,y1)
 
 x = 7*width/2/2/2/2
 y = 0
 x1 = width/2/2/2
 y1 = 3*height/2/2
 line_6 = line (x,y,x1,y1)
 
 x = 3*width/2/2
 y = 0
 x1 = 0
 y1 = 3*height/2/2
 line_7 = line (x,y,x1,y1)
 
 x = width
 y= height/2
 x1 = 0
 y1 = height
 line_8 = line (x,y,x1,y1)
 
 x = 0
 y = height/2/2/2
 x1 = width
 y1= 3*height/2/2
 line_9 = line (x,y,x1,y1)
 
}
