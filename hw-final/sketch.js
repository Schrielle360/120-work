var bubbles =[];

function setup () {
  createCanvas(600, 400);
}

function mousePressed() {
  var b = new Bubble(mouseX, mouseY);
  bubbles.push(b);
}

function draw() {
  background(0);
  for (var i = bubbles.length - 1; i>= 0; i--) {
    bubbles[i].update();
    bubbles[i].display();
  }
}
