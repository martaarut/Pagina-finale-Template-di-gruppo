let x=0
let y=0
let size = 60


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (203,77,99)
  

}

function draw() {
  strokeWeight (40)
  point (x, y)
 

  
  
  if(random(1) <0.5){
 
    
    line(x,y, x+size,y+size) 
  } else  {
     line (x,y+size,x+size,y)
  };
  x+= size;

  if (x>width) {
  x=0
  y+=size;
  
  }
  
  
 }