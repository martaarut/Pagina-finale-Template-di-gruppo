let x=0
let y=0
let size = 40


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (300,777,44)
  

}

function draw() {
  strokeWeight (40)
  point (x, y)
 

  
  
  if(random(1) <0.5){
 
    
    point(x,y, x+size,y+size) 
  } else  {
     point(x,y+size,x+size,y)
  };
  x+= size;

  if (x>width) {
  x=0
  y+=size;
  
  }
  
  
 }