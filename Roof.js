class Roof{
    constructor (x, y, width, height){
        var options = {
        isStatic: true,
        density: 1,
        friction: 0
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body)
        this.width = width
        this.height = height
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x, pos.y)
        fill("red")
        rectMode(CENTER)
        rect(0,0, this.width, this.height);
        pop();
    }
}