function setup() {
  createCanvas(windowWidth, windowWidth);
  background(300, 200, 0);
}

let x = 0;
let y = 0;
let size = 100;

function draw() {
  strokeWeight(20);

  if (random(1) < 0.5) {
    fill(255, 0, 0, 200);  // Rosso con opacità
  } else {
    fill(0, 0, 255, 200);  // Blu con opacità
  }

  triangle(x, y + size, x + size, y + size, x + size / 2, y);

  x += size;

  if (x >= width) {
    x = 0;
    y += size;
  }

  if (y >= height) {
    noLoop();  // Ferma il disegno una volta che l'intera tela è riempita
  }
}