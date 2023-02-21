const Engine=Matter.Engine
const World=Matter.World
const Bodies= Matter.Bodies
var engine,world,bg
var snow=[]
var maxsnow=900
function preload() {
  bg=loadImage("snow1.jpg")
}

function setup() {
  createCanvas(1000,600);
  engine=Engine.create()
  world=engine.world
  for(var i=0;i<maxsnow;i++){
    snow.push(new Snow(random(0,500),random(0,500),20))
  }
  
}

function draw() {
  Engine.update(engine)
  background(bg);  
  for(var i=0;i<maxsnow;i++){
  snow[i].display()
  }
}