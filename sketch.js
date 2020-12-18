const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ballObject1, ballObject2, ballObject3, ballObject4, ballObject5;
var logObject, string1, string2, string3, string4, string5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ballObject1 = new Ball(400,400);
	ballObject2 = new Ball(450,400);
	ballObject3 = new Ball(500,400);
	ballObject4 = new Ball(350,400);
	ballObject5 = new Ball(300,400);
  logObject = new Ground(400,200,550,30); 
  string1 = new String(ballObject1.body, logObject.body, 0, 0);
  string2 = new String(ballObject2.body, logObject.body,50,0);
  string3 = new String(ballObject3.body, logObject.body,100, 0);
  string4 = new String(ballObject4.body, logObject.body, -50, 0);
  string5 = new String(ballObject5.body, logObject.body, -100, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ballObject1.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();
  logObject.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  drawSprites();
 }
 function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ballObject3.body, ballObject5.body.position,{x:75,y:-75});
   }
 }




