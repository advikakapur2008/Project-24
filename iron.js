class Iron{
    constructor(x,y){
        var options={
            restitution:0.3,
            frictio:0.9,
            density:30
        }
        this.body = Bodies.rectangle(x,y,70,50);
        this.width = 70;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("black");
        fill("blue");
        rect(0,0, this.width, this.height);
        pop();
    }
}