var bubbles = [];
var img;
const numOfBubbles = 30;
function preload(){
    img = loadImage('catgirl.png');
}

function setup() {
    createCanvas(windowWidth, 400);
    // create a new bubble object of class type "bubble"
    let init_x = 60;
    let init_y = 60;
    for (let i = 0; i < numOfBalls; i++) {
        bubbles.push(new Bubble(init_x, init_y));
        // move the starting position over
        // This is to ensure that the chibis do not start
        // "on top" of each other
        init_x += 100;
        if (init_x > width) {
            init_x = 60;
            init_y += 100;
        }
    }

}

function mousePressed() {
  var b = new Bubble(mouseX, mouseY);
  bubbles.push(b);
}

function draw() {
  background('indigo');
  for (var i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].display();
    bubbles[i].bubbleCheck();
    bubbles[i].edgeCheck();
    
  }
}
