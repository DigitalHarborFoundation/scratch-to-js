var col = 0; // initial value of the color

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(50); // single value for background is gray scale.
  fill(col);
  ellipse(mouseX, mouseY, 50,50);
}

function mousePressed() {
  col = color(random(0,255), random(0,255), random(0,255)); // each mousepress randomizes the color
}
