class bob {
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restituion: 0.3,
            friction: 0.5,
            density: 1.2 
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x,this.y,(this.radius-20)/2,options);
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("magenta");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
    
}