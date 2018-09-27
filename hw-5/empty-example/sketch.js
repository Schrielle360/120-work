/**
 * Creepy Spinning Variable Person
 *
 */
let windowWidth = 750;
let windowHeight = 850;

function setup() {
    createCanvas( windowWidth, windowHeight );
    // createCanvas( windowWidth, windowHeight );
}

let headAngle = 0.5;
let headRotationRate = 0;
let armAngle = 0.2;
let headWidth = -80;
let headHeight = 45;

function draw() {
    // erase every frame
    background( 'rgb(156, 77, 155)' );
    // turn the cursor off
    noCursor();

    // UPDATE VALUES
    // base head rotation rate on mouseY pos
    headRotationRate = (mouseY * 0.2) - 25;
    // update head angle,
    // to equal itself plus headRotationRate
    headAngle = headAngle + headRotationRate;
    // set the arm to spin at a constant rate
    armAngle = armAngle - 3;


    // *****************************
    // PERSON SANDBOX
    // *****************************
    push();

    // make the person follow the mouse.
    translate( mouseX, mouseY );

    // ARMS
    push();
    // right arm
    strokeWeight( 20 );
    stroke( 0 );
    // draw the spinning forarm
    push();
    // move the position of the arm
    // to facilitate rotation
    translate( 60, -40 );
    // rotate the arm
    rotate( radians(armAngle) );
    // draw the arm
    line( 0, 0, 50, 0 );
    // define and draw a hand-thing
    fill( 'rgb(155, 176, 159)' );
    noStroke();
    ellipse( 50, 0, 20 );
    pop();
    // draw the static upper arm
    line( 10, -20, 60, -40 );

    // left arm
    push();
    // move the center to facilitate rotate
    translate( -25, -35 );
    // rotate, based on mouseX position
    rotate( radians( mouseX) );
    // draw arm and hand
    line( -10, -10, 15, 10);
    fill( 'rgb(155, 176, 159)' );
    noStroke();
    ellipse( 15, 10, 20 );
    pop();
    pop();


    // BODY
    // square body and colored teal?
    fill( 'rgb(14, 220, 175)' );
    rect( -20, -40, 40, 150 );

    // HEAD
    push();
    noStroke();
    fill( 'rgb(15, 132, 229)' );
    // moving it to fit on the body
    translate( 0, -60 );
    // where it will fit
    rotate( radians(headAngle) );
    // creating a base for the eyes and mouth but leaving it invisible
    triangle( 10, headWidth, headHeight );
    stroke(0);
    fill(255);
    // eyes
    strokeWeight(4);
    push();
    // draw eyes based on head size
    translate( headWidth * 0.2, headHeight * -0.4 );
    rect( 40, -25, -35, 25 );
    noStroke();
    fill( 'rgb(16, 31, 11)' );
    ellipse( 10, 10, 10 );
    fill( 5 );
    ellipse( 0, 0, 15 );
    pop();
    push();
    translate( headWidth * 0.2, headHeight * -0.4 );
    rect( 0, -25, -35, 23 );
    noStroke();
    fill( 'rgb(16, 31, 11)' );
    ellipse( 10, 10, 10 );
    fill( 0 );
    ellipse( 0, 0, 15 );
    pop();

    // MOUTH
    push();
    fill( 0 );
    arc( 0, headHeight * 0.4, 80, 20, 30, PI );
    pop();
    pop(); // <- END HEAD

    // LEGS
    fill( 'rgb( 14, 25, 240)' );
    noStroke();
    // keeping the feet planted
    triangle( -15, 35, 5, 35, -45, height+100 );
    triangle( 15, 35, -5, 35, 45, height+100 );

    pop(); // <- END PERSON

}
