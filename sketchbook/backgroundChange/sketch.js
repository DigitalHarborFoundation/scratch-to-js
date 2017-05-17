var randNum;
var frames;

function setup() {
  createCanvas(400, 400);
	frames = 1; //framerate set to 1fps
}

function draw() {
	frameRate(frames); //reduce framerate so color changes slower
	randNum = random(0, 255); //random number generator
  background(255, randNum, randNum);

}
