let chibi;
var img;

function preload(){
  img = loadImage('catgirl.png');
}

function setup() {
  //create the canvas (windowWidth, windowHeight);
  createCanvas( windowWidth, 600);

//creates a new chibi of the object of class 'chibi'
  chibi = new Chibi (width/2, height/2, 80 );
}


function draw() {
  background('indigo');

  //call the Chibi's methods
    chibi.display();
    chibi.move();
    chibi.edgeCheck();
}
