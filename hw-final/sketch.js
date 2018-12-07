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
  let init_x = 60;
  let init_y = 60;
  for (Let i = 0; i < numOfChibis; i++){
    chibis.push( new Chibi(init_x, init_y) );
    //move the starting position over
    // chibis wont start on eachother
    init_x += 100;
    if(init_x > width) {
      init_x = 60;
      init_y += 100;
    }
  }
}


function draw() {
  background('indigo');

  for (let i = 0; i < chibis.length; i++) {
  //call the Chibi's methods
    chibi[i].chibiCheck(chibis, i);
    chibi[i].display();
    chibi[i].move();
    chibi[i].edgeCheck();
  }
}
