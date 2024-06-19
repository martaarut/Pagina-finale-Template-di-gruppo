function setup() {
  createCanvas(windowWidth, windowHeight);
  background(160, 82, 45);
  noLoop();
}

function draw() {
  let cellSize = 10;
  strokeWeight(2);

  for (let y = 0; y < height; y += cellSize) {
      for (let x = 0; x < width; x += cellSize) {
          if (random() > 0.5) {
              stroke(139, 69, 19); // Brown color 1
              line(x, y, x + cellSize, y + cellSize);
          } else {
              stroke(181,101,29); // Brown color 2
              line(x + cellSize, y, x, y + cellSize);
          }
      }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw();
}