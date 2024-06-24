function setup() {
  createCanvas(windowWidth, windowHeight);
  background(191, 189, 188);
  noLoop();
}

function draw() {
  let cellSize = 10;
  strokeWeight(2);

  for (let y = 0; y < height; y += cellSize) {
      for (let x = 0; x < width; x += cellSize) {
          if (random() > 0.5) {
              stroke(162, 25, 255); // Purple 1
              // Draw a bezier curve
              bezier(x, y, x + cellSize / 2, y, x + cellSize / 2, y + cellSize, x + cellSize, y + cellSize);
          } else {
              stroke(66, 49, 137); //Purple 2
              // Draw a bezier curve
              bezier(x + cellSize, y, x + cellSize / 2, y, x + cellSize / 2, y + cellSize, x, y + cellSize);
          }
      }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw();
}