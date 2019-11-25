class Snake{
  constructor(){
    this.segments = [
      {
        x: width/2,
        y: width/2
      },
      {
        x: width/2 ,
        y: width/2 + 10
      }
    ]
    this.size = 10
    this.direction = UP_ARROW
  }
  
  show(){
    this.segments.forEach((segment)=>{
      stroke(0)
      strokeWeight(2)
      fill(255)
      rect(segment.x, segment.y, this.size, this.size)
    })
  }
  
  changeDirection(key){
    this.direction = key
  }
  
  UP_ARROW(){

  }

  DOWN_ARROW(){

  }

  LEFT_ARROW(){

  }

  RIGHT_ARROW(){
    
  }
}