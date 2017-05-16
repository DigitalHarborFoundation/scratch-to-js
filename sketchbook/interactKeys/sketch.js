var col = 0; // initial value of col
var bgcol = 50; //initial value of bgcol

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(bgcol); //arrow keypresses will change background color
  fill(col);
  ellipse(mouseX, mouseY, 50,50);
}


function keyTyped() { //keyTyped watches for user pressing letter keys
  if (key == 'p') {
    col = color(255,0,100); //if user types 'p' change color to pink
  } else if (key == 'g') {
    col = color(0, 255, 200); //if user types 'g' change color to green
  }
}

function keyPressed() { //keyPressed can be used for special characters
  if (keyCode == LEFT_ARROW) {
    bgcol = color(255); //left arrow changes background to white
  } else if (keyCode == RIGHT_ARROW) {
    bgcol = color(50); //right arrow changes background to gray
  }
}
