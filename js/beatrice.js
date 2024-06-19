let x, y;
let size;


function setup() {
  createCanvas(windowWidth, windowHeight);
  size =10;
 
  background(255);
}

function draw() {
  for (x=size/2; x<windowWidth; x=x+size) {
    for(y=size/2; y<windowHeight; y=y+size) {
      ellipse(x, y,size,size);
      fill(0);
      
      
    }
  }
      
      

    }