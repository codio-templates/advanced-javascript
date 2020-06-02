let connectors = []
let numConnectors = 60

function setup() {
  createCanvas(windowWidth, windowHeight)
  for (let i = 0; i < numConnectors; i++) {
    connectors.push(new Connector())
  }
}

function draw() {
  background(55);
  for (let i = 0; i < connectors.length; i++) {
    connectors[i].show()
    connectors[i].update(i, connectors)
  }
}