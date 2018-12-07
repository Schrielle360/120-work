let balls = [];
const numOfBalls = 20;
//puts the chibi girl in.
function preload(){
    img = loadImage('catgirl.png');
}
function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(windowWidth, 800);

    // create a new ball object of class type "Ball"
    let init_x = 60;
    let init_y = 60;
    for (let i = 0; i < numOfBalls; i++) {
        balls.push(new Ball(init_x, init_y));
        // move the starting position over
        // This is to ensure that the balls do not start
        // "on top" of each other
        init_x += 100;
        if (init_x > width) {
            init_x = 60;
            init_y += 100;
        }
    }
}

function draw() {
    background('rgb(66, 57, 66)');

    for (let i = 0; i < balls.length; i++) {
        // call the ball's methods
        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck();
        balls[i].move();
        balls[i].display();
    }
}
