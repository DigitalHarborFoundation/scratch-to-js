function setup() {
  createCanvas(600,600);
}

function draw() {
  background(50);

  for (i = 0; i < width; i += 6) {
    strokeWeight(2);
    stroke(color(255,0,100)); // set the stroke color for the lines
    line(i, 0, i, height); // since i increments by 10, the x values can be replaced by i
    stroke(10);
    if (i < width/2) {
        fill(color(255,60,75));
        ellipse(width/2, i, i + 10, i + 10);
    } else {
        stroke(50);
        fill(color(255,60,75, 50));
        ellipse(width/2, width/2)+ i, i + 10, i + 10);
    }

    for (j = 0; j < height; j += 5) {
        // strokeWeight(2);
        // stroke(color(255,60,75));
        // line(0, j, width, j);
        stroke(50);
        if (j < height - 50) {
            fill(color(255,0,100));
            ellipse(j, j, j + 5, j + 5);
        }
        else {
            stroke(color(255,0,100));
            fill(255);
            ellipse(j, j, j + 5, j + 5);
        }
    }
  }

}
