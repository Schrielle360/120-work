function setup() {
  //creating a canvas to draw on
  createCanvas( 900, 600)
}

function draw() {
  // the background color
  background( 'rgb(99, 66, 10)')
}
// created a sandbox for the entire thing
push();
// moving the grid

translate( 450, 300);

// BODY

push();
//body code here

pop();
// END OF BODY



// ARMS
push();
//arms code here

pop();
// END ARMS



//HEAD
push();

//head code here
//MAKE BASE FIRST

//THEN MOUTH

push();
//mouth code here

pop();
//END OF mouth


// EYES
push();
//EYES HERE

pop();
//end of eyes

pop();
// END OF HEAD

//end of character sandbox
pop();

}
