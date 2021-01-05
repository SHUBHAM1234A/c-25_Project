class Db{
    constructor(x,y,width,height) {
        this.width = width;
        this.height= height;
        this.body = Bodies.rectangle(x,y,width,height,{isStatic: true});
        this.image = loadImage("Images/dustbingreen.png")
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image,800,225,110,110);
    }
}