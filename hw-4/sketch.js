function setup() {
    // create a canvas
    createCanvas( 600, 800 );
}

function draw() {

    // background
    background( 'rgb(81, 48, 20)' );


    push();

    // set the grid center( x:0, y:0 )
    // to canvas center
    translate( 250, 350 );


    /* ARMS */

    push();
    translate( 0, -50 );

    // left arm
    stroke( 'rgba(107, 55, 9, 1.0)' );
    strokeWeight( 30 );
    line(-160, 50, -200, -100);
    line( -200, -100, -200, -210 );

    // hand
    stroke( 'rgb(250, 255, 0)' );
    strokeWeight( 60 );
    point( -200, -200 );
    point(-220, -220);


    // right arm
    rotate( PI );
    stroke( 'rgba(107, 55, 9, 1.0)' );
    strokeWeight( 30 );
    line(-160, 50, -200, -100);
    line( -200, -100, -200, -210 );

    // hand
    stroke( 'rgb(250, 250, 250)' );
    strokeWeight( 100 );
    point( -200, -200 );


    pop(); // ARMS END



    /* BODY */

    push();
    // main shirt rectangle
    fill( 'rgb( 0, 0, 0)' );
    rect( -150, -100, 300, 500 );

    pop();



    // candycorn
    fill( 'rgb(140, 61, 8)');
    triangle(-10, -75, -86, 75, 86, 75 );
    // 	Number: x-coordinate of the first point
// y1	Number: y-coordinate of the first point
// x2	Number: x-coordinate of the second point
// y2	Number: y-coordinate of the second point
// x3	Number: x-coordinate of the third point
// y3	Number: y-coordinate of the third point
fill( 'rgb(255, 225, 0)');
triangle(-10,-75, -70, 40, 65, 40);

fill( 'rgb(250, 250, 250)');
triangle(-10,-75, -60, 15, 51, 15);


    pop(); // BODY END!



    /* LEGS */

    push();
// candy corn!
translate (175, 725)
//left leg
fill( 'rgb(140, 61, 8)');
triangle(-10, -75, -86, 75, 86, 75 );

fill( 'rgb(255, 225, 0)');
triangle(-10,-75, -70, 40, 65, 40);

fill( 'rgb(250, 250, 250)');
triangle(-10,-75, -60, 15, 51, 15);

//right leg
translate (150, 0)
fill( 'rgb(140, 61, 8)');
triangle(-10, -75, -86, 75, 86, 75 );

fill( 'rgb(255, 225, 0)');
triangle(-10,-75, -70, 40, 65, 40);

fill( 'rgb(250, 250, 250)');
triangle(-10,-75, -60, 15, 51, 15);



    /* HEAD */

    push();

translate(-80, -600 );
    fill( 'rgb(255, 123, 0)' );
    ellipse( 0, 0, 330, 200 );



    // nose
    fill('rgb(0,0,0)');
    triangle( 0, -20, 30, 20, -30, 20 );

    // eyes
    // left
    push();
    translate( -60, -40 );

    fill('rgb(0, 0, 0)');
    ellipse( 0, 0, 60, 35 );



    pop();

    // right
    push();
    translate( 60, -40 );

    fill('rgb(0, 0, 0)');
    ellipse( 0, 0, 60, 35 );

//mouth

  fill('rgb(0,0,0)');
  triangle(-150,90,-130,50,-125,80)
  fill('rgb(0,0,0)');
  triangle(-125,80,-120,50,-115,90)
  fill('rgb(0,0,0)');
  triangle(-115,90,-100,70,-65,80)
  fill('rgb(0,0,0)');
  triangle(-65,80, -45, 100, -30, 70)

//neck
fill('rgb(112,61,14)');
rect(-100, 120, 100, 50)

    pop();

    pop(); // HEAD END


    pop();
}
