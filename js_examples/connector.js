class Connector {
  constructor() {
    this.r = 10
    this.pos = createVector(random(this.r, width - this.r), random(this.r, height - this.r))
    this.dir = createVector(random(-2, 2), random(-2, 2))
    this.linkLength = random(50, 100)
    this.changeTime = floor(random(50, 300))
  }

  show() {
    noFill()
    strokeWeight(2)
    stroke(255, 120)
    circle(this.pos.x, this.pos.y, this.r)
    stroke(255)
    strokeWeight(5)
    point(this.pos.x, this.pos.y)
  }

  update(index, arr) {
    this.pos.add(this.dir)
    this.changeDir()
    this.wrap()
    this.showConnections(index, arr)
  }

  changeDir() {
    if (frameCount % 120 == 0) {
      this.dir.x = random(-2, 2)
      this.dir.y = random(-2, 2)
    }
  }
  
  wrap() {
    if (this.pos.x - this.r > width) {
     this.pos.x = 0 - this.r 
    } else if (this.pos.x + this.r < 0) {
      this.pos.x = width + this.r
    }
    
    if (this.pos.y - this.r > height) {
      this.pos.y = 0 - this.r
    } else if (this.pos.y + this.r < 0) {
      this.pos.y = height + this.r
    }
  }
  
  showConnections(index, arr) {
    for (let i = index; i < arr.length; i++) {
      if (p5.Vector.dist(this.pos, arr[i].pos) < this.linkLength) {
        strokeWeight(1)
        stroke(255, 120)
        line(this.pos.x, this.pos.y, arr[i].pos.x, arr[i].pos.y)
      }
    }
  }

}