class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution: 0.5,
          friction: 0.7,
          density: 1.2
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      ellipseMode(RADIUS);
      stroke("white");
      fill("black");
      ellipse(this.body.position.x,this.body.position.y,this.radius);
      pop();
    }
  };