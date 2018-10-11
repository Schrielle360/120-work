let x = 300;
let speed = 3;

function setup() {
    createCanvas(windowWidth, 400);
}

function draw() {
    background(0);

if ( mouseIsPressed ) {
        background( random(255), random(255), random(255) );

        noStroke();
        fill( random(255), random(255), random(255) );
        ellipse(
            random(width),
            random(height),
            random(width),
            random(height)
        );
        textSize(100);
        textAlign(CENTER);
        text("HALLOWEEN", width/2, height/2);

    } else {
        background('rgb(180, 135, 99)');
        fill('rgb(116, 126, 91)');
        textSize(36);
        textAlign(CENTER);
        text("happy...", width/2, height/2);
    }
    if (mouseIsPressed){
      frameRate (10);
    }
    else {
      frameRate (60);
    }
    stroke('orange');
    strokeWeight(4);
    noFill();
    ellipse(x, height / 2, 100, 100);

    if (x > width) {
        speed = -3;
    }
    if (x === 0) {
        speed = 3;
    }
    x = x + speed;

}
