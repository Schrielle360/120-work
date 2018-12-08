let chibi = [];
var img;
const numOfChibis = 10;
var song;
let num = 0
var slider;

function preload(){
  img = loadImage('catgirl.png');
  song = loadSound("SuG.mp3");
}

function setup() {
  //create the canvas (windowWidth, windowHeight);
  createCanvas( windowWidth, 600);
  //create slider
  slider = createSlider(0, 1, 0.5, 0.01);
  // create the song
  song.play();
//creates a new chibi of the object of class 'chibi'
  let init_x = 60;
  let init_y = 60;
  for (let i = 0; i < numOfChibis; i++){
  let c = new Chibi(init_x, init_y);
   chibi.push(c);
   chibiTimer();
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

  //sets the songs volume to the sliders value
  song.setVolume(slider.value());

  for (let i = 0; i < chibi.length; i++) {
  //call the Chibi's methods
    chibi[i].chibiCheck(chibi, i);
    chibi[i].display();
    chibi[i].move();
    chibi[i].edgeCheck();
    chibi[i].mouseCheck();
  }
  textSize(100);
  textAlign(CENTER);
  strokeWeight(3);
  stroke('chartreuse');
  fill('magenta');
  text("POP THE CHIBI", width/2, height/2)

  textSize(25);
  strokeWeight(4);
  stroke('black');
  text("Score:" + num, 100, 575);
}

// deletes a chibi if clicked.
function mousePressed() {
    for (let i = chibi.length - 1; i >= 0; i--) {
      let destroyMe = chibi[i].mouseCheck();
      if (destroyMe) {

          num = num + 1

        chibi.splice(i, 1);
        break;
      }
   }
}

function chibiTimer() {
  let b = new Chibi(random(width), random(height), random(200));
  chibi.push(b);
  //this has the effect of calling itsself every x-milliseconds
  setTimeout(chibiTimer, random(20000));
}
