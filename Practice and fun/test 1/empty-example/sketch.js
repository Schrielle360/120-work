// defining pumpkin variables
let windowWidth = 800;
let x = mouseX
let y = mouseY

// we can then assign qualities to the object


 function setup (){
   createCanvas( windowWidth, 600);
   background ('black');

 }

function draw() {


//happy halloween text
  fill('orange');
  textSize(100);
  stroke('brown');
  strokeweight(4);
  textFont('Calder');
  text('Happy Halloween!', 25, 100);


// translate the canvas to center being 0
translate (400, 400); //0 is now the center of the canvas

//now making the head

push();
fill('orange');
ellipse(x, y, 200, 100); //base of the head

fill('black');
//eyes
triangle(x-50, y-35, x-50, y-10, x-15, y-10); // left eye
triangle(x+50, y-35, x+50, y-10, x+15, y-10); //right eye
triangle(x, y-10, x-10, y+10, x+10, y+10); // nose

//mouth

triangle(x-50, y+10, x-50, y+30, x-25, y+20); //first triangle left of mouth
triangle(x-30, y+10, x-30, y+30, x+5, y+20); //second triangle left of mouth
triangle(x-5, y+20, x+30, y+10, x+30, y+30); //first triangle right of mouth
triangle(x+20, y+20, x+50, y+10, x+50, y+30); // second triangle right of mouth

// the stem
fill('green'); //making stem green
rect(x-10, y-70, 15, 20);

fill('yellow'); //eye pupils
ellipse(x-30, y-15, 5, 5); //left pupil
ellipse(x+30, y-15, 5, 5); //right pupil
pop();

//this makes the pumpkin move across the screen
x=x+1

// this lets the pumpkin return and loop
if (x > 700) {
  x = -30
}
}
