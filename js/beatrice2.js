let x=0
let y=0
let size = 60


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (101,67,33)
  

}

function draw() {
  strokeWeight (2)
  triangle(x, y + size, x+ size, y+size,x+ size/2,y)
  fill (random (255),random (192), random(203))
 

  
  
  
  x+= size;

  if (x>width) {
  x=0
  y+=size;
  
  }
  
  
 }