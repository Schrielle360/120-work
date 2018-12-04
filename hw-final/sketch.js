var bubbles = [];
var img;

function preload(){
    img = loadImage('catgirl.png');
}

function setup() {
    createCanvas(windowWidth, 400);
    let b = new Bubble(width/2, height/2, 10);
    bubbles.push(b);
}

function mousePressed() {
  var b = new Bubble(mouseX, mouseY);
  bubbles.push(b);
}

function draw() {
  background(0);
  for (var i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].display();
  }
}
