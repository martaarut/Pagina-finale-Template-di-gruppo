
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(12);
  }
  
  function setup() {
    createCanvas(windowWidth,windowHeight);
  }
  
  function draw() {
    
    background(179,197,144);
    noStroke();
    stroke(50)
    strokeWeight (2)
    for (let i = 0; i < height; i += 20) {
      fill(255, 203, 164);
      rect(200, i, width, 20);
      fill(0);
      rect(i, 30, height,40);   
   triangle(240, 300, 345, 300, 340,96) 
  }
  
  }
  