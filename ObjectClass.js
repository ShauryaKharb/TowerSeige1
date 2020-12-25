class ObjectClass{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.3
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
        fill("#42d7f5");
        //stroke("red");
        //strokeWeight(4);
        //image(this.image,0,0,50,50);
        rect(0,0,this.width,this.height);
        pop();
    }
}