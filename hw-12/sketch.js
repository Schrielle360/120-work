// Bouncing Balls
// Week 12


// create a variable for the ball object
let balls = [];
const numOfBalls = 30;

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
    background('indigo');

    for (let i = 0; i < balls.length; i++) {
        // call the ball's methods
        balls[i].ballCheck(balls, i);
        balls[i].edgeCheck();
        balls[i].move();
        balls[i].display();
    }
}



//////////////////////////////////////////////////
//      BALL CLASS DEFINITION
//////////////////////////////////////////////////
class Ball {
    constructor(x, y, size) {
        this.color = 'pink';
        this.size = random(20, 60);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-10, 5);
        this.deltaY = random(-10, 5);
    }

    display() {
        push();
        strokeWeight(4);
        fill(this.color);
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
            // check if the ball has hit a vertical wall (left or right walls)
            if (this.posX + this.rad >= width) {
            //Check if it is going right, if so change course
            if(this.deltaX > 0) {
            this.deltaX *= -1;
                this.color = 'rgb(110, 240, 158)';
               }
        }
        else if (this.posX - this.rad <= 0) {
            if(this.deltaX < 0) {
            this.deltaX *= -1;
                    this.color = 'rgb(110, 240, 158)';
            }
            }
            // check if the ball has hit a horizontal wall (top or bottom walls)
            else if (this.posY + this.rad >= height) {
            if(this.deltaY > 0) {
            this.deltaY *= -1;
                    this.color = 'rgb(110, 240, 158)';
            }
        }
        else if(this.posY - this.rad <= 0) {
                if(this.deltaY < 0) {
            this.deltaY *= -1;
                    this.color = 'rgb(110, 240, 158)';
            }
            }
    }


    ballCheck(otherBalls, myId) {
        // for loop touches each of the balls in the array
        for (let n = 0; n < otherBalls.length; n++) {
            // if n != myId, then check for touching
            // otherwise, its ME and we need to skip
            if (n != myId) {
                let d = dist(this.posX, this.posY, otherBalls[n].posX, otherBalls[n].posY);
                let combinedR = this.rad + otherBalls[n].rad;

                if (d <= combinedR) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;

                    // flip the color
                    if( this.color == 'magenta') {
                        this.color = 'blue';
                    } else {
                        this.color = 'violet';
                    }
                }
            }
        }
    }
}
