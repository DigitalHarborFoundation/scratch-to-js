x = 200;
y = 200;
vx = 10;
vy = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255,0,100);
  ellipse(x, y, 50, 50);
  y = y + vy;

  if(y >= height || y <= 0){
    vy = -vy;
  }
}
