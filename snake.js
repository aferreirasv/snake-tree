class Snake{
  constructor(){
    this.tail = [10,0]
    this.snakeHead = {x: 0, y: 0} 
    this.lastSegment = null
    this.size = 10
    this.direction = "RIGHT"
    this.moves = {
      "UP_ARROW": () => {
        this.direction = "UP"
      },
      "DOWN_ARROW": () => {
        this.direction = "DOWN"
      },
      "RIGHT_ARROW": () => {
        this.direction = "RIGHT"
      },
      "LEFT_ARROW": () => {
        this.direction = "LEFT"
      }
    }
    this.colisionType = "snake"

  }
  
  show(){
    stroke(0)
    strokeWeight(2)
    fill(255)
    rect(this.snakeHead.x, this.snakeHead.y, this.size, this.size)
    this.tail.forEach((segment)=>{
      rect(segment[0], segment[1], this.size, this.size)
    })
  }
  updateTail(){
    for (let i = 0; i < this.tail.length; i++){
      i === 0 ?  this.tail[i] = [this.snakeHead.x, this.snakeHead.y] : this.tail[i] = this.tail[i-1]
    }
  }
  
  move(){
    if(this.direction == "LEFT" && this.snakeHead.x > 0){
      this.snakeHead.x -= 10
    } else if(this.direction == "UP" && this.snakeHead.y > 0){
      this.snakeHead.y -= 10
    } else if(this.direction == "RIGHT" && this.snakeHead.x < width - this.size){
      this.snakeHead.x += 10
    } else if(this.direction == "DOWN" && this.snakeHead.y < height - this.size){
        this.snakeHead.y += 10
    }
  }

  checkColision(obj){
    let dX = this.snakeHead.x - obj.x
    let dY = this.snakeHead.y - obj.y
    if (obj.colisionType === "food" && dX === 0 && dY === 0){
      obj.x = getRandomGrid(width)
      obj.y = getRandomGrid(height)
      this.tail.push(this.tail[this.tail.length -1 ])
    }
  }
}