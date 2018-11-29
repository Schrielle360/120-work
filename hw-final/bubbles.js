class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    move() {
        this.x = this.x + random(-3, 3);
        this.y = this.y + random(-3, 3);
    }

    show() {
        noStroke();
        fill('pink');
        ellipse(this.x, this.y, this.r * 2);
    }
}
