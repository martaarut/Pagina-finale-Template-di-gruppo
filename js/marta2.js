function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(2);
  stroke(0);
  noLoop();  // Disabilita il ciclo draw per disegnare solo una volta
}

function draw() {
  let stepSize = 50;  // Dimensione della griglia

  for (let x = 0; x < width; x += stepSize) {
    for (let y = 0; y < height; y += stepSize) {
      let randomChoice = random(2);
      if (randomChoice < 1) {
        // Disegna Pac-Man (arco)
        let startAngle = random([0, HALF_PI, PI, PI + HALF_PI]);
        fill(255, 255, 0);  // Colore giallo per Pac-Man
        arc(x + stepSize / 2, y + stepSize / 2, stepSize * 0.8, stepSize * 0.8, startAngle, startAngle + PI + QUARTER_PI, PIE);
      } else {
        // Disegna un puntino colorato
        let r = random(255);
        let g = random(255);
        let b = random(255);
        fill(r, g, b);  // Colore casuale per i puntini
        ellipse(x + stepSize / 2, y + stepSize / 2, stepSize * 0.2, stepSize * 0.2);
      }
    }
  }
}