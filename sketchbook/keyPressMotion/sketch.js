var col = 0; // initial value of col
var bgcol = 50; //initial value of bgcol
var xPos;
var yPos;

function setup() {
    createCanvas(600, 600);
    xPos = width / 2;
    yPos = height / 2;
}

function draw() {
    background(bgcol); //arrow keypresses will change background color
    fill(col);
    // ellipse(xPos, yPos, 50, 50);
    ellipse(xPos, yPos, 50, 50);
}


function keyTyped() { //keyTyped watches for user pressing letter keys
    if (key == 'p') {
        col = color(255, 0, 100); //if user types 'p' change color to pink
    } else if (key == 'g') {
        col = color(0, 255, 200); //if user types 'g' change color to green
    }
}

function keyPressed() { //keyPressed can be used for special characters
    if (keyCode == LEFT_ARROW) {
        xPos = xPos - 20;
    } else if (keyCode == RIGHT_ARROW) {
        xPos = xPos + 20;
    } else if (keyCode == UP_ARROW) {
        yPos = yPos - 20;

    } else if (keyCode == DOWN_ARROW) {
        yPos = yPos + 20;
    }
}
