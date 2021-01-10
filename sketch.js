
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustI=loadImage("image/dust.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.

	Engine.run(engine);
  dustbin1=new dustbin();
  dustbinI=Bodies.rectangle(200,100,40,40)
  World.add(world,dustbinI)
  ground=Bodies.rectangle(width/2, 680,width, 10 , {isStatic:true} )
  World.add(world,ground)
  paper1=new Paper(100,650,50)

}


function draw() {
  rectMode(CENTER);
  background(255);
 dustbin1.display(); 
rectMode(CENTER)
fill("yellow")
rect(ground.position.x,ground.position.y,width,10)
paper1.display();
imageMode(CENTER)
image(dustI,690,620,200,120)

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:95,y:-95})
	}
}


