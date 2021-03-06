const { UP_ARROW } = require("./p5");

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
    
	paper = new Paper(400,650)


}


function draw() {
  rectMode(CENTER);
  background(230);
 
  function keyPressed(){
if(keycode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
}

  }

  groundObject.display();
  dustbinObj.display();
  paper.display();
}

