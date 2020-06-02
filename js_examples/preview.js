let radius = 25
let angle = 0
let amplitude = 90
let period = 500
let xSpacing = 50
let dx

function setup() {
  createCanvas(400, 230)
  noStroke()
  dx = (TWO_PI / period) * xSpacing
}

function draw() {
  background(149, 165, 166)
  fill(231, 76, 60)
  angle += 0.03
  let vertical = angle
  for (let i = 0; i < 9; i++) {
    if (mouseX > 0 &&
        mouseX < width &&
        mouseY > 0 &&
        mouseY < height) {
      let y = sin(vertical) * amplitude + height/2
    let x = i * xSpacing
    vertical += dx
    circle(x, y, radius * 2)
    } 
  }
}