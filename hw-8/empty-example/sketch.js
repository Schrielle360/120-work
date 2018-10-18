
let option = 5;
function setup() {
  createCanvas(windowWidth, 800);
}

function draw() {
  background('pink');
  let density = map(mouseX, 0, width, 20, 50);


   if (option == 1) {
    // Option 1: Perspective
    for (let x = 50; x <= width-50; x += density) {
      for (let y = 50; y <= height-50; y+=density) {
        line(x, y, width/2, height/2);
      }
    }
  }
  else if (option == 2) {
    // Option 2: stacked cubes
    for (let x = 50; x <= width-50; x += density) {
      for (let y = 50; y <= height-50; y+=density) {
        rect(x, y, 40, 40);
      }
    }
  }
  else if (option == 3) {
    // Option 3: Overlapping circles
    for (let x = 50; x <= width-50; x += density) {
      for (let y = 50; y <= height-50; y+=density) {
        ellipse(x, y, 40, 40);
      }
    }
  }
  else if (option == 4) {
    // Option 4: Rotating arcs
    let count = 120;
    for (let x = 50; x <= width-50; x += density) {
      for (let y = 50; y <= height-50; y+=density) {
        let s = map(count, 120, 0, 0, TWO_PI*2);
        arc(x, y, 14, 14, s, s + PI);
        count--;
      }
    }
  }
  else if (option ==5) {
    //option 5: cat
    for (let x =50; x <= width-50; x += density) {
      for (let y = 50; y <= height-50; y+=density) {
        fill('orange');
        ellipse(x, y, 40, 20);
        stroke('black');
        triangle(x-20, y-10, x-15, y-20, x-10, y-10);
        triangle(x+20, y-10, x+15, y-20, x+10, y-10);
        ellipse(x-5, y-3, 5, 5);
        ellipse(x+5, y-3, 5, 5);
        triangle(x-1, y, x, y-1, x+1, y);
      }
    }
  }

}

function mousePressed() {
  option++;
  if (option > 5) option = 1;
}
