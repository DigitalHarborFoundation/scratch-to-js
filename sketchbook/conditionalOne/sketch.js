function setup() {
  createCanvas(800,800);
  strokeWeight(4);
}

function draw() {
  background(100); // single value  for background is gray scale
  ellipse(mouseX, mouseY, 50,50); //draws an ellipse at the mouse cursor

  if (mouseX < width/2) { // if the mouse position is on the left half of the screen
    fill(255,0,100);
  }
  else { // if the mouse is not on the left half of the screen
    fill(0,255,100);
  }
}
