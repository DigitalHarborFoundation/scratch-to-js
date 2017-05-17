function setup() {
  createCanvas(400,400);
}

function draw() {
  background(50);
  stroke(color(80,170,100)); // lines use stroke instead of fill for color
  line(10, 0, 10, height); // draw a vertical line with line(x1, y1, x2, y2)
  stroke(color(80,175, 100));
  line(20, 0, 20, height);
  stroke(color(90,180,110));
  line(30, 0, 30, height);
  stroke(color(100,190,120));
  line(40, 0, 40, height);
  stroke(color(110, 200 ,130));
}
