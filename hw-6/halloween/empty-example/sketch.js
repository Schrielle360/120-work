// defining pumpkin variables
let windowWidth = 800;
let x = 0
let y = 0
let candy = {};
candy.pos1x = mouseX;
candy.pos1y = mouseY;
candy.color = fill('red');
candy.size = stroke(30);
let 
// we can then assign qualities to the object


 function setup (){
   createCanvas( windowWidth, 600);
   background ('black');

 }

function draw() {


//happy halloween text
  fill('orange');
  textSize(100);
  textFont('Calder');
  text('Happy Halloween!', 25, 100);




//this makes the pumpkin move across the screen
x=x+1

// this lets the pumpkin return and loop
if (x > 700) {
  x = -350
}
}
