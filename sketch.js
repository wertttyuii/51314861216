let zoomLevel = 1;
let xPos = 0;
let yPos = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  translate(width/2 + xPos, height/2 + yPos);

  // draw the circle pattern with gradient effect
  let numOfCircles = 10;
  let color1 = color(255, 0, 0);
  let color2 = color(0, 0, 255);
  for (let i = 0; i < numOfCircles; i++) {
    let t = map(i, 0, numOfCircles-1, -1, 1);
    let colorAtT = lerpColor(color1, color2, (t+1)/2);
    stroke(colorAtT);
    let r = map(i, 0, numOfCircles-1, height/2, height/8);
    ellipse(0, 0, r*2, r*2);
  }
  
  // generate graph with line and coordinate points
  let numPoints = 10;
  let graphSize = width/4;
  let xMargin = (width - graphSize)/2;
  let yMargin = (height - graphSize)/2;
  noFill();
  stroke(0);
  strokeWeight(2);
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    let x = map(i, 0, numPoints-1, xMargin, xMargin+graphSize);
    let y = map(noise(i), 0, 1, yMargin, yMargin+graphSize);
    vertex(x, y);
  }
  endShape();
  
  // display text and move it with the mouse
  textSize(48);
  textAlign(CENTER, CENTER);
  fill(255, 0, 0);
  text("TKU THEDU", mouseX + 20, mouseY + 20);
  
  // zoom in and zoom out based on mouse movement
  let zoomAmount = map(mouseX, 0, width, 0.5, 2);
  zoomLevel = lerp(zoomLevel, zoomAmount, 0.05);
  scale(zoomLevel);

  // update xPos and yPos based on mouse movement
  if (mouseX > width/2) {
    xPos -= 5;
  } else {
    xPos += 5;
  }
}





