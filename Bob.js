class Bob{
    constructor (x, y, r){
        var options = {
        restitution: 1,
        density: 1,
        friction: 0
        }
        this.body = Bodies.circle(x, y, r, options)
        World.add(world, this.body)
        this.r = r
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x, pos.y)
        fill("red")
        ellipseMode(RADIUS)
        ellipse(0,0, this.r, this.r);
        pop();
    }
}