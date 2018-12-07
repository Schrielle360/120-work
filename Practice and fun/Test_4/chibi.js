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
    //the main image
    image(img, this.x, this.y);
    pop();
  }

  move() {
    this.x = this.x += this.deltaX;
    this.y = this.y += this.deltaY;
  }

  edgeCheck() {
    // check if the ball has hit a vertical wall (left or right walls)
    if( this.posX + this.rad >= width || this.posX - this.rad <= 0 ) {
        this.deltaX *= -1;
    }
    // check if the ball has hit a horizontal wall (top or bottom walls)
    if( this.posY + this.rad >= height || this.posY - this.rad <= 0 ) {
        this.deltaY *= -1;
    }
  }
}
