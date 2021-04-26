class BaseClass{
  constructor(x,y,r){
    var options={
        restitution:1,
        friction:5.0,
        density:1.0,
        isStatic:1
    }
    this.r = r;
    this.x=x
    this.y=y
    this.body=Bodies.circle(this.x, this.y, this.r, options)
   
   this.image=loadImage("base.png")
   
    World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y)
    imageMode(RADIUS)
   
    //rectMode(CENTER);
   
   
  
    image(0,0, this.r);
    pop();
}
}
