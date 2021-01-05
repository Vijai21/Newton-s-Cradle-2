class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:1.2,
            length: 180
        }
        this.pointB=pointB;
        this.chain= Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            stroke("white");
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}