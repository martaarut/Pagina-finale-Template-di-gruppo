function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 239, 222);
  
  strokeWeight(30); // Aumenta lo spessore delle linee
  stroke(0); // Colore nero delle linee

  // Coordinate centrali
  let centerX = windowWidth / 2;
  let centerY = windowHeight / 2;

  // Linee centrali orizzontale e verticale
  line(centerX, 0, centerX, windowHeight); // Linea verticale al centro
  line(0, centerY, windowWidth, centerY);  // Linea orizzontale al centro

  // Linee a distanza fissa dal centro
  line(centerX - 250, centerY, centerX + 250, centerY); // Linea orizzontale a 250px dal centro
  line(centerX, centerY - 200, centerX, centerY + 200); // Linea verticale a 200px dal centro

  // Linee ai bordi
  line(0, 0, 0, windowHeight); // Bordi sinistro
  line(windowWidth, 0, windowWidth, windowHeight); // Bordo destro
}
