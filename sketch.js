
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world, dustbin1, dustbin2, dustbin3 , paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(1050, 580, 100, 10);
	dustbin2 = new Dustbin(1000, 550, 10, 70);
	dustbin3 = new Dustbin(1100, 550, 10, 70)

	paper = new Paper(100, 200, 10);

	ground = new Ground();
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 
 
}

function keyPressed() { 
   if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper.body, paper.body.position, {x: 17, y: -17});
   }
}