
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 239, 222);

  strokeWeight(30);
  stroke(0);

  // Coordinate centrali del canvas
  let centerX = windowWidth / 2;
  let centerY = windowHeight / 2;

  // Distanze delle linee dal centro
  let offsetX = 125; // Metà della larghezza tra le linee verticali (250 / 2)
  let offsetY = 100; // Metà della distanza tra le linee orizzontali (200 / 2)
  
  let rectWidth = 200;
  let rectHeight = 150;

  // Linee centrali
  line(centerX - rectWidth, centerY - rectHeight, windowWidth, centerY - rectHeight); // Linea orizzontale superiore
  line(centerX - rectWidth, 0, centerX - rectWidth, centerY + rectHeight); // Linea verticale sinistra
   
  line(0, centerY + rectHeight, centerX + rectWidth, centerY + rectHeight); // Linea orizzontale inferiore
  line(centerX + rectWidth, centerY - rectHeight, centerX + rectWidth, windowHeight); // Linea verticale destra

  // Linee ai bordi
  line(0, 0, 0, windowHeight); // Bordo sinistro
  line(windowWidth, 0, windowWidth, windowHeight); // Bordo destro
  line(0, 0, windowWidth, 0); // Bordo superiore
  line(0, windowHeight, windowWidth, windowHeight); // Bordo inferiore
}

