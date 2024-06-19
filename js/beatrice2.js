let size = 1; 
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke (255);


  for (let x = 0; x < windowWidth; x += size) {
    for (let y = 0; y < windowHeight; y += size) {
      if (random() > 0.6) { 
        line(x + size / 2, y, x + size / 2, y + size); 
      }
    }
  }
}