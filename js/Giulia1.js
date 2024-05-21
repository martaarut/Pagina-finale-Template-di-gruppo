let x = 0;
let y = 0;
let spacing = 50;
let continueDrawing = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  // Disegna un cerchio o un rettangolo alla posizione (x, y)
  if (continueDrawing) {
    drawShape(x, y);

    // Aggiorna la posizione x per spostarsi alla prossima colonna
    x += spacing;

    // Controlla se x ha superato la larghezza della canvas
    if (x > width - spacing) {
      // Passa alla riga successiva
      x = 0;
      y += spacing;

      // Controlla se y ha superato l'altezza della canvas
      if (y > height - spacing) {
        // Se abbiamo completato la canvas, interrompi il disegno
        continueDrawing = false;
      }
    }
  }
}

function drawShape(x, y) {
  // Disegna un cerchio o un rettangolo
  strokeWeight(5);
  fill(115, 220, 20);
  stroke(200, 30, 60);

  if (random(1) < 0.5) {
    circle(x + spacing / 2, y + spacing / 2, spacing); // Posiziona il cerchio al centro del rettangolo
  } else {
    rect(x, y, spacing, spacing);
  }
}
