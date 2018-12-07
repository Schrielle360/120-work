var chibis = [];
var img;
const numOfChibis = 20;
function preload(){
    img = loadImage('catgirl.png');
}

function setup() {
    createCanvas(windowHeight, windowWidth);
    // create a new chibi object of class type "chibi"
    let init_x = 30;
    let init_y = 30;
    for (let i = 0; i < numOfChibis; i++) {
        chibis.push(new Chibi(init_x, init_y));
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
  for (var i = chibis.length - 1; i >= 0; i--) {
    chibis[i].update();
    chibis[i].display();
    chibis[i].bubbleCheck();
    chibis[i].edgeCheck();

  }
}
