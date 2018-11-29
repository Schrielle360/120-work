let bubbles = [];

function setup() {
    createCanvas(windowWidth, 400);
    let b = new Bubble(width/2, height/2, 10);
    bubbles.push(b);
}

function mousePressed() {
    let r = random(5, 30);
    let b = new Bubble(mouseX, mouseY, r);
    bubbles.push(b);
}

function mouseDragged() {
  let r = random (5, 30);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
    background('green');
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

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
