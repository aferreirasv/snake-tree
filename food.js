class Food{
    constructor(){
        this.x = getRandomGrid(width) 
        this.y = getRandomGrid(height)
        this.size = 10
        this.colisionType = "food"
    }


    show(){
        stroke(0)
        strokeWeight(3)
        fill(255,0,0)
        rect(this.x,this.y,this.size,this.size)
    }
}