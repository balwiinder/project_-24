
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,world;
var hammer;
var rubber;
var stone;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 hammer = new Hammer(100,200);
 plane = new Plane(400,height,800,40);
 rubber = new Rubber(600,380,70,70);
 stone = new Stone(450,380,70,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
hammer.display();
plane.display();
rubber.display();
//stone.display();
stone.display();
  drawSprites();
 
}



