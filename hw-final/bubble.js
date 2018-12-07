Class Chibi (x, y) {
  constructor() {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rad = this.size / 2;
    this.deltaX = random(-10, 10);
    this.deltaY = random(-10, 10);
  }
  //shows the chibi
  display () {
    imageMode(CENTER);
    image(img, this.x, this.y);
    //stroke(255);
    //fill(255,100);
    //ellipse(this.x,this.y, 48, 48);
  }
  //moves the chibi
  move () {
    this.x += this.deltaX;
    this.y += this.deltaY;
  }
  edgeCheck(){
      // check if the ball has hit a vertical wall (left or right walls)
    if (this.x + this.rad >= width || this.x - this.rad <= 0) {
          this.deltaX *= -1;
    }
      // check if the ball has hit a horizontal wall (top or bottom walls)
    if (this.y + this.rad >= height || this.y - this.rad <= 0) {
          this.deltaY *= -1;
    }
  }
      bubbleCheck(otherChibis, myId) {
          // for loop touches each of the balls in the array
          for (let i = 0; i < otherChibis.length; i++) {
              // if i != myId, then check for touching
              // otherwise, its ME and we need to skip
              if (i != myId) {
                  let d = dist(this.x, this.y, otherChibis[i].x, otherChibis[i].y);
                  let combinedR = this.rad + otherChibis[i].rad;

                  if (d <= combinedR) {
                      this.deltaX *= -1;
                      this.deltaY *= -1;
                }
            }
        }
    }
}
