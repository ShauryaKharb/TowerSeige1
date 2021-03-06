class Ground {
    constructor(x,y,width,height){
        var options = {
            friction : 5,
            isStatic : true
        }
        this.body = MyBodies.rectangle(x,y,width,height,options);
        MyWorld.add(world,this.body);
        this.width=width;
        this.height=height;
        

    }
    display(){
        rectMode(CENTER);
        imageMode(CENTER);
        var angle=this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("#f542d1");
        rect(0,0,this.width,this.height);
        pop();
    }
}