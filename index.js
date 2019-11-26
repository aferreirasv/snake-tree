function setup(){
  createCanvas(640,640)
  snake = new Snake()
  frRate = 10
  food = new Food()
}

function draw(){    
  frameRate(frRate)
  background(0)
  snake.updateTail()
  snake.checkColision(food)
  snake.move()
  snake.show()
  food.show()
}

function keyPressed(){
  switch(keyCode){
    case 37:
      keyCode = "LEFT_ARROW"
      break
    case 38:
      keyCode = "UP_ARROW"
      break
    case 39:
      keyCode = "RIGHT_ARROW"
      break
    case 40:
      keyCode = "DOWN_ARROW"
      break
    case 80:
      if (frRate === 10){
        frRate = 0
        frameRate(frRate)
        console.log("PAUSE")
      } else if(frRate === 0){
        frRate = 10
        frameRate(frRate)
        console.log("UNPAUSE")
      }
      break
    default:
      return
  }
  if (snake.moves[keyCode]) {
    snake.moves[keyCode]()
  }
  return false
}

function getRandomGrid(max){
  return Math.floor(random(max) / 10) * 10
}