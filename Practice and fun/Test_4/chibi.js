Class Chibi (x, y) {
  constructor() {
    this.x = x;
    this.y = y;
  }

  display() {
    image(img, this.x, this.y);
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);

  }
}
