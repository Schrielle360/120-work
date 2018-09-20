function setup() {
  //creating a canvas to draw on
  createCanvas(600, 900)
}

function draw() {
  // the background color
  background( 'rgb(99, 66, 10)');

}
// created a sandbox for the entire thing
push();
// moving the grid (x:0, y:0)
// to canvas center

translate( 300, 450);

// BODY

push();
rect( -150, -100, 300, 300);

//background
fill( 'rgba( 0, 0, 0, 1.0)');



pop();
// END OF BODY



// ARMS
push();
//arms code here

pop();
// END ARMS



//HEAD
push();


    stroke( 0 );
    fill('rgba(255, 119, 0, 1.0)');
    ellipse( 0, 0, 400 );



//THEN MOUTH

push();
// ** draw the smiley face mouth **
// This is centered on the 0-point,
// of the x-axis
noStroke();
fill( 40 );
arc( 0, 50, 300, 200, 0, PI );



pop();
//END OF mouth


// EYES
push();

// In other words they have the
// same y-value (-15px)
// And the x-value is mirrored
// (left:-20px right:20px)
fill( 40 );
// ** left eye **
ellipse( -100, -75, 100 );
// ** right eye **
ellipse( 100, -75, 100 );
pop();
//end of eyes

pop();
// END OF HEAD

//end of character sandbox
pop();

}
