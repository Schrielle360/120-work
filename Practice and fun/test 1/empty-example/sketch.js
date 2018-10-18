// DEFINE GLOBAL VARIABLES
let bgColor; // background-color
let centerX, centerY;
let smoke = {};
smoke.pos1x = 100;
smoke.pos1y = 100;
smoke.pos2x = 200;
smoke.pos2y = 200;
smoke.pos3x = 0;
smoke.pos3y = 0;
let multMax = 0.02;
let multDelta;
let mult;
let redFill = 255;
let alphaAmt = 50;
let alphaNoise;
let x = -400;
let y = 0;

let candy = {};
  candy.posx = 100;
  candy.posy = 100;

let speed = 5

function setup() {
    bgColor = color('black');
    // createCanvas(windowWidth, windowHeight);
    createCanvas(1000, 800);
    background(bgColor);
    // frameRate(20);

    // Set initial position
    smoke.pos1x = random(width);
    smoke.pos1y = random(height);
    smoke.pos2x = smoke.pos1x + 100;
    smoke.pos2y = smoke.pos1y - 100;
}


function draw() {


    centerX = width * 0.5;
    centerY = height * 0.5;

    multDelta = noise(0.99 * frameCount + pow(2, 8));
    multDelta = map(multDelta, 0, 1, -0.01, 0.01);
    multMax = constrain(multMax + multDelta, 0.05, 0.4);
    mult = random(-multMax, multMax);
    smoke.pos3x = abs(((width * mult) + smoke.pos2x) % width);
    mult = random(-multMax, multMax);
    smoke.pos3y = abs(((height * mult) + smoke.pos2y) % height);


    mult = noise(frameCount * 0.01) * 250;
    redFill = constrain(mult, 0, 255);

    noStroke();
    // stroke(200, 20);
    // get a random noise value between (0-1)
    alphaNoise = noise(0.1 * frameCount + 1000);
    alphaNoise = map(alphaNoise, 0, 1, -2, 2);
    alphaAmt += alphaNoise;
    alphaAmt = constrain(alphaAmt, 20, 100);
    fill(100, 255 - redFill, 175, 30);

    triangle(smoke.pos1x, smoke.pos1y, smoke.pos2x, smoke.pos2y, smoke.pos3x, smoke.pos3y);

    smoke.pos1x = smoke.pos2x;
    smoke.pos1y = smoke.pos2y;
    smoke.pos2x = smoke.pos3x;
    smoke.pos2y = smoke.pos3y;

    // candys

     candy.posx = random(0, width);
     candy.posy = random(0, height);
     fill(random(250), random(250), random(250));
     ellipse(candy.posx, candy.posy, 20, 20);



push();
//Happy halloween text
  fill('white');
  stroke('brown');
  strokeWeight(4);
  textSize(100);
  textFont('Calder');
  text('Happy Halloween!', 25, 100);

// translate the canvas to center being 0
translate (400, 400); //0 is now the center of the canvas

//now making the head
push();
  strokeWeight(2);
  fill('orange');
  ellipse(x, y, 200, 100); //base of the head

  fill('black');
//eyes
  triangle(x-50, y-35, x-50, y-10, x-15, y-10); // left eye
  triangle(x+50, y-35, x+50, y-10, x+15, y-10); //right eye
  triangle(x, y-10, x-10, y+10, x+10, y+10); // nose

// the stem
  fill('green'); //making stem green
  rect(x-10, y-70, 15, 20);

  fill('yellow'); //eye pupils
  ellipse(x-30, y-15, 5, 5); //left pupil
  ellipse(x+30, y-15, 5, 5); //right pupil
pop();

// The hands
//left
  fill('orange');
  rect(x-130, y-10, 40,30);
  rect(x-115, y-25, 10,20);
//straight
  fill('orange')
  rect(x+90, y-10, 40, 30);
  rect(x+105, y-25, 10, 20);

  //mouth
    fill('black');
    stroke('black');
    triangle(x-50, y+10, x-50, y+30, x-25, y+20); //first triangle left of mouth
    triangle(x-30, y+10, x-30, y+30, x+5, y+20); //second triangle left of mouth
    triangle(x-5, y+20, x+30, y+10, x+30, y+30); //first triangle right of mouth
    triangle(x+20, y+20, x+50, y+10, x+50, y+30); // second triangle right of mouth


// this lets the pumpkin return and loop
if ( x >= 650 || x < -450) {
  speed = speed * -1;
}

// this makes the pumpkin move across the screen
x = x + speed

}
