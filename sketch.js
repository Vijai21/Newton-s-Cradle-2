
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(300,350,25);
	bob2 = new Bob(350,350,25);
	bob3 = new Bob(400,350,25);
	bob4 = new Bob(450,350,25);
	bob5 = new Bob(500,350,25);
	chain1 = new Chain(bob1.body,{x:300,y:100});
	chain2 = new Chain(bob2.body,{x:350,y:100});
	chain3 = new Chain(bob3.body,{x:400,y:100});
	chain4 = new Chain(bob4.body,{x:450,y:100});
	chain5 = new Chain(bob5.body,{x:500,y:100});

	Engine.run(engine);
}


function draw() {
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
}

function mouseDragged(){
      Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}


function keyPressed(){
	if(keyCode === LEFT_ARROW){
      Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:0})
	}
}



