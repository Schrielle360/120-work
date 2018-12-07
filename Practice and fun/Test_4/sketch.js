var chibi;
var img;

function preload(){
  img = loadImage('catgirl.png');
}

function setup() {
  createCanvas( 800, 600);

  chibi = new Chibi (width/2, height/2, 50 );
}


function draw() {
  background('indigo');

  //call the ball's methods
    chibi.move();
    chibi.display();
    chibi.edgeCheck();
}
