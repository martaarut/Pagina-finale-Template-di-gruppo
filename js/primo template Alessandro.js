let circles = [];
let loopCounter = 0;
let maxLoops = 450; // Numero massimo di iterazioni prima di fermare il loop

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(240); // Sfondo grigio chiaro
  

  for (let i = 0; i < 100; i++) {
    let grayScale = random(50, 220); // Tonalità di grigio casuale
    let circle = {
      x: random(width),
      y: random(height),
      diameter: random(10, 30),
      gray: grayScale,
      speedX: random(-2, 2),
      speedY: random(-2, 2)
    };
    circles.push(circle);
  }
}

function draw() {
  // Disegniamo i cerchi e lasciamo una scia di colore dietro di loro
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    
    // Disegna il cerchio con il colore grigio
    fill(circle.gray);
    noStroke();
    ellipse(circle.x, circle.y, circle.diameter);
    
    // Aggiorna la posizione del cerchio in base alla velocità
    circle.x += circle.speedX;
    circle.y += circle.speedY;
    
    // Limita la posizione del cerchio all'interno del canvas
    circle.x = constrain(circle.x, 0, width);
    circle.y = constrain(circle.y, 0, height);
  }
  
  // Incrementa il contatore di loop
  loopCounter++;
  
  // Se il contatore di loop raggiunge il numero massimo, ferma il loop
  if (loopCounter >= maxLoops) {
    noLoop();
  }
}