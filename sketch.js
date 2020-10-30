const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
  createCanvas(800,400);
  top1 = new Ground (500,200,350,30)
}

function draw() {
  background(255,255,255);  

  top1.display();
  drawSprites();
}