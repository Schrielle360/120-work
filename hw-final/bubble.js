function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.size = random(20, 80);
  this.rad = this.size / 2;
  this.deltaX = random(-10, 10);
  this.deltaY = random(-10, 10);
  this.display = function() {
    imageMode(CENTER);
    image(img, this.x, this.y);
    //stroke(255);
    //fill(255,100);
    //ellipse(this.x,this.y, 48, 48);
  }
  //changes where the chibi is.
  this.update = function() {
    this.x += this.deltaX;
    this.y += this.deltaY;
  }
  edgeCheck() {
      // check if the ball has hit a vertical wall (left or right walls)
    if (this.x + this.rad >= width || this.x - this.rad <= 0) {
          this.deltaX *= -1;
    }
      // check if the ball has hit a horizontal wall (top or bottom walls)
    if (this.y + this.rad >= height || this.y - this.rad <= 0) {
          this.deltaY *= -1;
    }
  }

      bubbleCheck(otherbubbles, myId) {
          // for loop touches each of the balls in the array
          for (let i = 0; i < otherbubbles.length; i++) {
              // if i != myId, then check for touching
              // otherwise, its ME and we need to skip
              if (i != myId) {
                  let d = dist(this.x, this.y, otherbubbles[i].x, otherbubbles[i].y);
                  let combinedR = this.rad + otherbubbles[i].rad;

                  if (d <= combinedR) {
                      this.deltaX *= -1;
                      this.deltaY *= -1;
                }
            }
        }
    }
}
