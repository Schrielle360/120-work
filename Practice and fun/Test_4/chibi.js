class Chibi {
  constructor(x, y, size) {
    this.color = color;
    this.size = size;
    this.rad = this.size/ 2;
    this.x = x;
    this.y = y;
    this.deltaX = random(-2, 2);
    this.deltaY = random(-2, 2);
  }

  display() {
    push();
    //center image
    imageMode(CENTER);
    //the main image
    image(img, this.x, this.y);
    pop();
  }

  move() {
    this.x = this.x += this.deltaX;
    this.y = this.y += this.deltaY;
  }

  edgeCheck() {
    // check if the Chibi has hit a vertical wall (left or right walls)
    if( this.x + this.rad >= width || this.x - this.rad <= 0 ) {
        this.deltaX *= -1;
    }
    // check if the Chibi has hit a horizontal wall (top or bottom walls)
    if( this.y + this.rad >= height || this.y - this.rad <= 0 ) {
        this.deltaY *= -1;
    }
  }

  chibiCheck( otherChibis, myId) {
    //for loop touches each of the Chibis in the array
    for (let n = 0; n < otherChibis.length; n++) {
      //if n != myId, then check for touching
      //otherwise, its ME and we need to skip
      if( n != myId) {
          let d = dist( this.x, this.y, otherChibis[n].x, otherChibis[n].y );
          let combinedR = this.rad + otherChibis[n].rad;

          if( d <= combinedR) {
            this.deltaX *= -1;
            this.deltaY *= -1;
        }
      }
    }
  }
}
