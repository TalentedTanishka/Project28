
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world , engine;
var ground ;
var tree , boy;
var mango1 , mango2 , mango3 , mango4 , mango5 ; 
var mango6 , mango7 , mango8 , mango9 , mango10 ;
var mango11 , mango12 ,mango13 ;
var sun , ray1 , ray2 , ray4 , ray5;
var stone , band;


function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,20000,60);



	mango1 = new Mango(1100,300,70);
	mango2 = new Mango(1350,150,60);
	mango3 = new Mango(1200,300,80);
	mango4 = new Mango(1150,350,60);
	mango5 = new Mango(1300,300,70);
	mango6 = new Mango(1250,150,80);
	mango7 = new Mango(1400,300,70);
	mango8 = new Mango(1370,240,80);
	mango9 = new Mango(1500,300,70);
	mango10 = new Mango(1450,230,70);

mango11 = new Mango(1520,390,60);
	mango12 = new Mango(1230,230,70);
	mango13 = new Mango(1300,230,60);
	
	tree = new Tree(1300,370);

	boy = new Boy(590,600,300,400);

	sun = new Sun(100,100,80)

	ray1 = new Rays(100,30,10,50);
	ray2 = new Rays(100,170,10,50);
	ray3 = new Rays(30,90,50,10);
	ray4 = new Rays(170,90,50,10);

	stone = new Stone(500,600,80)
	band = new Band(stone.body ,{x :500 , y: 500});
	
	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine)
  rectMode(CENTER);
  background(44,157,237);

  ground.display();
  
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
 mango9.display();
 mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();

  
  
  
  
  sun.display();

   ray1.display();
  ray2.display();
  
  ray3.display();
  ray4.display();
  

  
  
  
 boy.display();
  stone.display();
 band.display();
  


 detectollision(stone,mango1)
 detectollision(stone,mango2)
 detectollision(stone,mango3)
 detectollision(stone,mango4)
 detectollision(stone,mango5)
 detectollision(stone,mango6)
 detectollision(stone,mango7)
 detectollision(stone,mango8)
 detectollision(stone,mango9)
 detectollision(stone,mango10)
 detectollision(stone,mango11)
 detectollision(stone,mango12)
 detectollision(stone,mango13)
 

  
  
 
}
function mouseDragged()
{
Matter.Body.setPosition(stone.body , {x : mouseX , y : mouseY})

}

function mouseReleased()
{

	band.fly();
}
function detectollision(stone , mango)
{
mangoBodyPosition = mango.body.position
stoneBodyPosition = stone.body.position
console.log("hi")
var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y ,mangoBodyPosition.x , mangoBodyPosition.y )
console.log(distance)
if(distance <mango.radius + stone.radius)
{
  
	Matter.Body.setStatic(mango.body , false)
}
}
function keyPressed()
{
  if(keyCode == 32)
  {
    Matter.Body.setPosition(stone.body , {x :200 , y : 60})
    band.attach(stone.body);

  }


}