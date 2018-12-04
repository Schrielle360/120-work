var bubbles = [];
var img;
const numOfBubbles = 30;
function preload(){
    img = loadImage('catgirl.png');
}

function setup() {
    createCanvas(windowHeight, windowWidth);
    // create a new bubble object of class type "bubble"
    let init_x = 30;
    let init_y = 30;
    for (let i = 0; i < numOfBalls; i++) {
        bubbles.push(new Bubble(init_x, init_y));
        // move the starting position over
        // This is to ensure that the chibis do not start
        // "on top" of each other
        init_x += 100;
        if (init_x > width) {
            init_x = 40;
            init_y += 70;
        }
    }

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
