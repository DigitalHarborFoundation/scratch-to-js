/* these values are outside of the functions so that they're available to all functions
remember, for a variable to be global it must be placed outside the functions in the sketch!
*/

var xVal = 100;
var yVal = 100;

function setup() {
  createCanvas(640,480);
}

function draw() {
  background(255,0,100); //now the background will be always changed on refresh of draw()
  line(0,0,width,height);
  line(width,0,0,height);
}
