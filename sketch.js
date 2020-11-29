
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var roof1;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(356,100,300,10);

  bobObj1 = new bob(260,300,50);
	bobObj2 = new bob(310,300,50);
	bobObj3 = new bob(360,300,50);
	bobObj4 = new bob(410,300,50);
	bobObj5 = new bob(460,300,50);
	
  rope1 = new rope(bobObj1.body, roof1.body,-96,4);
  rope2 = new rope(bobObj2.body, roof1.body,-46,4);
  rope3 = new rope(bobObj3.body, roof1.body,4,4);
  rope4 = new rope(bobObj4.body, roof1.body,54,4);
  rope5 = new rope(bobObj5.body, roof1.body,104,4);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof1.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Body.applyForce(bobObj5.body,bobObj5.body.position,{x:12,y:12});
   }
}
