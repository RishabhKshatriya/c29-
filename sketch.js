const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);

  sling = new SlingShot (200,300);

  Engine.run(engine);
}

function draw() {
  background(255,255,255);
   

  slingshot.display();

  drawSprites();
}