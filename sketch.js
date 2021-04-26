
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var launcherObject
var launcherForce=100
function preload()
{ boyImage=loadImage("boy.png")
treeImage=loadImage("tree.png")
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.World;

	//Create the Bodies Here.
  stone=new STONE(150,300,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boyImage,150,300,300,500)
  image(treeImage,500,0,450,700)
  drawSprites();
 stone.display();
 Engine.update(engine);
}



