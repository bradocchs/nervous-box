let pos

function setup() {
  createCanvas(200, 200)
  pos = createVector(width / 2, height / 2)
}

function draw() {
  background(51)
  rectMode(CENTER)
  let xD = abs(width / 2 - pos.x)
  let yD = abs(height / 2 - pos.y)
  let danger = 255
  if (xD > yD) danger = map(xD, 0, 75, 255, 0)
  if (xD < yD) danger = map(yD, 0, 75, 255, 0)
  fill(255, danger, danger)
  rect(pos.x, pos.y, 50, 50)
  let vel = createVector(random(-1, 1), random(-1, 1))
  pos.add(vel)
  if (pos.x < 25 || pos.x > width - 25 || pos.y < 25 || pos.y > height - 25) {
    pos.x = width / 2
    pos.y = height / 2
  }
}
