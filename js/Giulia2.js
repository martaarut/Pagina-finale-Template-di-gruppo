function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200); // Sfondo grigio
  stroke(0); // Colore delle linee nero
  strokeWeight(2); // Spessore delle linee
  
  let numLines = 60; // Numero di linee
  let lineWidth = width / numLines; // Larghezza delle colonne
  
  for (let i = 0; i < numLines; i++) {
    let x = i * lineWidth + lineWidth / 2;
    let startY = 10; // Y iniziale
    let endY = startY + random(200, 500); // Y finale casuale
    
    line(x, startY, x, endY);
  }
}

function draw() {
  // Nessuna necessità di disegnare continuamente
  noLoop();
}