class Line{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
        this.string=Constraint.create(options);
        MyWorld.add(world,this.string);
    }

    attach(body){
        this.string.bodyA = body;
    }

    fly(){
        this.string.bodyA = null;
    }

    display(){
         if(this.string.bodyA){
            var PointA = this.string.bodyA.position;
            var PointB= this.string.pointB;
            push();
            stroke("#42f566");
            strokeWeight(5);
            line(PointA.x,PointA.y,PointB.x,PointB.y);
            pop();
         }
    }
}