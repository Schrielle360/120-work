// setup; In p5, the setup function is where we place commands that relate to “setting up” a code sketch. p5 calls and executes the setup() function once, at the start of executing every p5 sketch.
function setup() {

    // create a canvas 600px wide and 600px high
    createCanvas( 600, 600 );

    // color the background 'purple'
    background( 'purple' );
}

// This is where you would put writing or other things.

function draw() {

    // tell p5 to print the text string "Hello World!"
    // This is going to be positioned at ( x: 20, y: 30 ).
    text( "Hello World!", 20, 30 );
}
