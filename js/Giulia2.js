let x = 0;
let y = 0;
let spacing = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(120, 60, 125);
}

function draw() {
  if (random(10) < 1) {
    line(x, y, x + 10, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
    line(x, y, x + spacing, y);
    line(x + spacing, y, x, y);
  }

  x = x + spacing;

  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}