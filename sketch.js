
function setup() {
    createCanvas(windowWidth, windowHeight);
    }
    
  function draw() {
    
    //background(130, 130, 130);

    background(80, 80, 80);
  
  ////
    // circle
    strokeWeight(1);
    stroke(70,70,70);
    fill(70,70,70);
    circle(windowWidth/2, windowHeight/2, 15);
  
    //circle 2
    strokeWeight(1);
    stroke(90,90,90);
    fill(90,90,90);
    circle(windowWidth/2, windowHeight/2, 10);


  ////
  
    var x = windowWidth;
    
    //horizontal lines #1
    for (var y = windowHeight/2; y <= windowHeight; y = y + 30){
      strokeWeight(2);
      stroke (220, 220, 220);
      line (x, y, 0, y);
    }
    //horizontal lines #2
    for (var y = windowHeight/2; y <= windowHeight; y = y + 40){
      strokeWeight(1);
      stroke (210, 210, 210);
      line (x, y, 0, y);
    }
    //horizontal lines #3
    for (var y = windowHeight/2; y <= windowHeight; y = y + 50){
      strokeWeight(2);
      stroke (190, 190, 190);
      line (x, y, 0, y);
    }
    
    ////
    
  
    var y = windowHeight;
   //vertical lines #1
   for (var x = windowWidth/2; x <= windowWidth; x = x + 30){
    strokeWeight(2);
    stroke (210, 210, 210);
    line (x, 0, x, y);
  }
  //vertical lines #2
  for (var x = windowWidth/2; x <= windowWidth; x = x + 40){
    strokeWeight(1);
    stroke (170, 170, 170);
    line (x, 0, x, y);
  }
  //vertical lines #3
  for (var x = windowWidth/2; x <= windowWidth; x = x + 50){
    strokeWeight(2);
    stroke (110, 110, 110);
    line (x, 0, x, y);
  }
  
  ////
  
    var y = windowHeight;
    //diagonal left #1
    for (var x = 0; x <= windowWidth; x = x + 40){
      strokeWeight(2);
      stroke (215, 180, 215);
      line (0, 0, x, y);
        //line(x1, y1, x2, y2)
        //x1 starts at 0 but increments in 50's
        //0 = top of line stays at 0
        //x2=moves along with first x ensuring vertical line)
        //y= ensures bottom of y reaches windowHeight
    }
    //diagonal left #2
    for (var x = 0; x <= windowWidth; x = x + 50){
      strokeWeight(1);
      stroke (160, 160, 160);
      line (0, 0, x, y);
    }
    
    //diagonal left #3
    for (var x = 0; x <= windowWidth; x = x + 60){
      strokeWeight(1);
      stroke (180, 180, 180);
      line (0, 0, x, y);
    }
    var x = windowWidth;
    //diagonal right #1
    for (var y = 0; y <= windowHeight; y = y + 40){
      strokeWeight(1);
      stroke (200, 200, 200);
      line (0, y, x, 0);
    }
    //diagonal right #2
    for (var y = 0; y <= windowHeight; y = y + 50){
      strokeWeight(1);
      stroke (160, 180, 250);
      line (0, y, x, 0);
    }
    //diagonal right #3
    for (var y = 0; y <= windowHeight; y = y + 60){
      strokeWeight(2);
      stroke (220, 220, 220);
      line (0, y, x,0);
    }





  }
  