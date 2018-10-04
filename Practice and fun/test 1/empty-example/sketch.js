// defining pumpkin variables
let windowWidth = 800;
let x = -400;
let y = 0;

// we can then assign qualities to the object


 function setup (){
   createCanvas( windowWidth, 600);
   background ('black');

 }

function draw() {


//happmouseY halloween temouseXt
  fill('orange');
  textSize(100);
  textFont('Calder');
  text('Happy Halloween!', 25, 100);


// translate the canvas to center being 0
// translate (400, 400); //0 is now the center of the canvas

//now making the head

push();
fill('orange');
ellipse(mouseX, mouseY, 200, 100); //base of the head

fill('black');
//emouseYes
triangle(mouseX-50, mouseY-35, mouseX-50, mouseY-10, mouseX-15, mouseY-10); // left emouseYe
triangle(mouseX+50, mouseY-35, mouseX+50, mouseY-10, mouseX+15, mouseY-10); //right emouseYe
triangle(mouseX, mouseY-10, mouseX-10, mouseY+10, mouseX+10, mouseY+10); // nose

//mouth

triangle(mouseX-50, mouseY+10, mouseX-50, mouseY+30, mouseX-25, mouseY+20); //first triangle left of mouth
triangle(mouseX-30, mouseY+10, mouseX-30, mouseY+30, mouseX+5, mouseY+20); //second triangle left of mouth
triangle(mouseX-5, mouseY+20, mouseX+30, mouseY+10, mouseX+30, mouseY+30); //first triangle right of mouth
triangle(mouseX+20, mouseY+20, mouseX+50, mouseY+10, mouseX+50, mouseY+30); // second triangle right of mouth

// the stem
fill('green'); //making stem green
rect(mouseX-10, mouseY-70, 15, 20);

fill('Yellow'); //emouseYe pupils
ellipse(mouseX-30, mouseY-15, 5, 5); //left pupil
ellipse(mouseX+30, mouseY-15, 5, 5); //right pupil
pop();

//this makes the pumpkin move across the screen
x = x +1

// this lets the pumpkin return and loop
if (x > 700) {
  x = -350
}
}
