const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var maxDrops = 200;
var drops=[];
function preload(){
    
    
}

function setup(){
    createCanvas(900,700);
    engine=Engine.create()
    world=engine.world;
      for(var i=0; i < maxDrops; i ++){
        drops.push(new Drop(random(0,900), random(0,900)));
    };


   
    
}

function draw(){
    background("black");
    Engine.update(engine);
    for(var x=0; x < maxDrops; x++){
        drops[x].display();
    }
    drop.update();
}   
 
