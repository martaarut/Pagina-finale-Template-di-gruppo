let totalShapes = 150; 
let shapesDrawn = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  
  if (shapesDrawn >= totalShapes) {
    noLoop(); 
    return; 
  }

  
  let shapeType = int(random(3)); 
  
  let x = random(width);
  let y = random(height);
  let size = random(20, 100);

  
  let r = random(255);
  let g = random(255);
  let b = random(255);

 
  fill(r, g, b);
  stroke(r, g, b);

  
  if (shapeType === 0) {
    
    ellipse(x, y, size, size);
  } else if (shapeType === 1) {
   
    rect(x, y, size, size);
  } else if (shapeType === 2) {
    
    let x2 = random(width);
    let y2 = random(height);
    line(x, y, x2, y2);
  }

  
  shapesDrawn++;
}