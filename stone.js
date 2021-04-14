class Stone{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:0.9,
            density:12
        }
        this.body = Bodies.rectangle(x, y, 50,20, options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        strokeWeight(3)
        stroke("black");
        fill("red");
        rect(0,0,this.width, this.height);
        pop()
    }
}