function setup() {
    createCanvas(windowWidth, windowHeight);
    background (300,200,0) }
    let x = 0;
    let y = 0;
    let size = 30;
    
  
  function draw() {
     strokeWeight(19);
    
    if(random(2) < 1){
      
      line(x,y, x+size, y+size, y);
      
    } else {
      
      line (x, y+size, x+size, y)
    } 
    
    x += size;
    
    if(x> width) {
      x= 0;
      y += size
    }
  }