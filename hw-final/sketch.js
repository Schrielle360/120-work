let chibi = [];
var img;
const numOfChibis = 20;

function preload(){
  img = loadImage('catgirl.png');
}

function setup() {
  //create the canvas (windowWidth, windowHeight);
  createCanvas( windowWidth, 600);

//creates a new chibi of the object of class 'chibi'
  for (let i = 0; i < 5; i++) {
  let init_x = random(windowWidth, windowHeight);
  let init_y = random(windowWidth, windowHeight);
  for (let i = 0; i < numOfChibis; i++){
  let c = new Chibi(init_x, init_y);
   chibi.push(c);
    //move the starting position over
    // chibis wont start on eachother
    init_x += random(0, windowWidth);
    init_y += random(0, windowHeight);
    if(init_x > width) {
      init_x += 60
      init_y += 60
      }
    }
  }
}

// deletes a chibi if clicked.
function mousePressed() {
    for (let i = chibi.length-1; i >= 0; i--) {
      if (chibi[i].rollover(mouseX, mouseY)) {
        chibi.splice(i, 1);
      }
    }
}

function draw() {
  background('indigo');

  for (let i = 0; i < chibi.length; i++) {
  //call the Chibi's methods
    chibi[i].chibiCheck(chibi, i);
    chibi[i].display();
    chibi[i].move();
    chibi[i].edgeCheck();
    chibi[i].rollover();
  }
}
