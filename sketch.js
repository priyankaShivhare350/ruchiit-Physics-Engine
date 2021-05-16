//world,engine,bodies
const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies

var engine,world;
var object;
function setup() {
  createCanvas(600,600);
  engine=Engine.create();
  world=engine.world;
object=Bodies.rectangle(200,100,50,50);
  World.add(world,object)
  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background(0); 
  Engine.update(engine);
 rectMode(CENTER)
rect(300,300,100,100)
rect(object.position.x,object.position.y,60,60)

}