class Ball {
    constructor(x, y, size) {
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-2, 2);
        this.deltaY = random(-2, 2);
        this.display = function() {
          imageMode(CENTER);
          image(img, this.x, this.y);
          //stroke(255);
          //fill(255,100);
          //ellipse(this.x,this.y, 48, 48);
        }
    }
    //changes the position
    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }
    // makes sure it doesn't leave the canvas
    edgeCheck() {
        // check if the ball has hit a vertical wall (left or right walls)
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
        }
        // check if the ball has hit a horizontal wall (top or bottom walls)
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
        }
    }

    // makes sure the chibi doesn't bounce into others 
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

                }
            }
        }
    }
}
