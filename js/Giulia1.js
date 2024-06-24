function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(255); // Sfondo bianco
  
  let colors = [50, 150, 200]; // Scala di grigi
  let gridSize = 24; // Dimensione della griglia

  for (let y = 0; y < height; y += gridSize) {
    for (let x = 0; x < width; x += gridSize) {
      // Calcola la dimensione del quadrato basata sulla posizione
      let d = dist(x, y, width / 2, height / 2);
      let size = map(d, 3, dist(0, 0, width / 2, height / 2), gridSize, gridSize / 3);

      // Seleziona un colore casuale dalla scala di grigi
      let c = random(colors);
      fill(c);
      noStroke();
      
      rect(x, y, size, size);
    }
  }
}