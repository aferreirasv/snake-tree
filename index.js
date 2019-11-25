function setup(){
  createCanvas(400,400)
  snake = new Snake()
}

function draw(){    
  background(30)
  snake.show()
    
}

function keyPressed(){
  snake.move(keyCode)
}