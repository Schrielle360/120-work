let chibi = [];
var img;
const numOfChibis = 40;

function preload(){
  img = loadImage('catgirl.png');
}

function setup() {
  //create the canvas (windowWidth, windowHeight);
  createCanvas( windowWidth, 600);

//creates a new chibi of the object of class 'chibi'
  for (let i = 0; i < 1; i++) {
  let init_x = 60;
  let init_y = 60;
  for (let i = 0; i < numOfChibis; i++){
  let c = new Chibi(init_x, init_y);
   chibi.push(c);
    //move the starting position over
    // chibis wont start on eachother
    init_x += 100;
    if(init_x > width) {
      init_x += random(60, 600);
      init_y += random(60, 600);
      }
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
    chibi[i].mouseCheck();
  }
}

// deletes a chibi if clicked.
function mousePressed() {
    for (let i = chibi.length - 1; i >= 0; i--) {
      let destroyMe = chibi[i].mouseCheck();
      if (destroyMe) {
        bubbles.splice(i, 1);
      }
   }
}

function chibiTimer() {
  let c = new Chibi(random(width), random(height), random(200));
  chibi.push(b);
  //this has the effect of calling itsself every x-milliseconds
  setTimeout(chibiTimer, random(20000));
}
