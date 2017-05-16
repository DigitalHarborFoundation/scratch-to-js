
function setup() {

  createCanvas(600,600);

}

function draw() {

  background(50);
  drawRects(20, 20); // now you can draw a series of cascading rectangles at new starting points!
  drawRects(80, 80);
  drawRects(120, 120);
  drawRects(200, 200);
  drawRects(5, 5);
}

  // the function takes two inputs: xOrigin and yOrigin.
  // experiment with entering different values!
function drawRects(xOrigin, yOrigin) {
  fill(color(255,0,100));
  rect(xOrigin, yOrigin, xOrigin + 10, yOrigin + 10);
  fill(color(255, 0, 80));
  rect(xOrigin + 10, yOrigin + 10, xOrigin + 20, yOrigin + 20);
  fill(color(255,0, 70));
  rect(xOrigin + 20, yOrigin + 20, xOrigin + 30, yOrigin + 30);
  fill(color(255,0, 60));
  rect(xOrigin + 30, yOrigin + 30, xOrigin + 40, yOrigin + 40);
}
