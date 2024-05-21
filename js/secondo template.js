let totalShapes = 150; // Total number of shapes to be drawn
let shapesDrawn = 0; // Counter to track the number of shapes drawn

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  // Check if the total number of shapes drawn has reached the limit
  if (shapesDrawn >= totalShapes) {
    noLoop(); // Stop the draw loop
    return; // Exit the draw function
  }

  // Randomly select a shape to draw
  let shapeType = int(random(3)); // 0: ellipse, 1: rectangle, 2: line

  // Random position and size for the shape
  let x = random(width);
  let y = random(height);
  let size = random(20, 100); // Random size within a range

  // Random color for the shape
  let r = random(255);
  let g = random(255);
  let b = random(255);

  // Set fill and stroke color based on the random RGB values
  fill(r, g, b);
  stroke(r, g, b);

  // Draw different shapes based on shapeType
  if (shapeType === 0) {
    // Draw an ellipse
    ellipse(x, y, size, size);
  } else if (shapeType === 1) {
    // Draw a rectangle
    rect(x, y, size, size);
  } else if (shapeType === 2) {
    // Draw a line
    let x2 = random(width); // Random endpoint for the line
    let y2 = random(height);
    line(x, y, x2, y2);
  }

  // Increment the counter for shapes drawn
  shapesDrawn++;
}