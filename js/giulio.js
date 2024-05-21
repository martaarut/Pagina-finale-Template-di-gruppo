function setup() {
    createCanvas(windowWidth,windowHeight);
    background (300,200,0)
    color (RGB)
    
    
  }
    let x = 0;
    let y = 0;
    let size = 40;
    
  
  function draw() {
     strokeWeight(1);
    
    if(random(2) < 0.9){
      stroke (300,200,0,0)
      fill (200,100,0,random(255))
      //line(x,y, x+size, y+size, y);
      
    } else {
      stroke (150,0,0,0)
      fill(150,0,0, random(255))
      square(x,y,40)
      //triangle (x, y+size, x+size, y)
    }
   
    
    x += size;
    
    if(x> width) {
      x= 0;
      y += size
    }
  }