var chibis = [];

function setup() {
  createCanvas( 800, 600);
}

function mousePressed() {
  var b = new Chibi(mouseX, mouseY);
  bubbles.push(b);
}

function draw() {
  background('indigo');
  for (var i = chibis.length - 1; i >= 0 ; i--) {
    chibis[i].update();
    chibis[i].display();
  }
}
