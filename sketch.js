
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxside1,boxside2,boxside3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	packageBody = Bodies.circle(width/2 , 300 , 5 ,{density:1,restitution:1, isStatic:false});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
	 boxsideRSprite = new Box(480,615,20,100);
	 boxsideLSprite = new Box(280,610,20,100);
	 boxsidebottomSprite = new Box(370,650,200,20);
	
	
}
function draw() {
  rectMode(CENTER);
  background(0);

 packageSprite;
 packageBody;
 strokeWeight(4);

 keyPressed();
 boxsideRSprite.display();
 boxsideLSprite.display();
 boxsidebottomSprite.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  }
}



