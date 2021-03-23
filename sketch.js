const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var poly1
var ground1,ground2
var part1,part2,part3,part4,part5,part6,part7,part8,part9,part10,part11,part12,part13,part14,part15,part16,part17,part18,part19,part20,part21,part22;





function preload() {




}

function setup(){
    var canvas = createCanvas(1300,900);
    engine = Engine.create();
    world = engine.world;

poly1= new poly(100,300,60,60);
ground1= new Ground(30,500,8800,30);
ground2= new Ground(570,390,300,30);
part1= new part(500,300,20,40);
part2= new part(522,300,20,40);
part3= new part(544,300,20,40);
part4= new part(566,300,20,40);
part5=new part(588,300,20,40);
part6=new part(610,300,20,40);
part7=new part(632,300,20,40);
part8=new part(654,300,20,40);
part9=new part(650,300,20,40);
part10=new part(522,270,20,40);
part11=new part(543,270,20,40);
part12=new part(564,270,20,40);
part13=new part(586,270,20,40);
part14=new part(608,270,20,40);
part15=new part(630,270,20,40);
part16=new part(605,200,20,40);
part17=new part(583,200,20,40);
part18=new part(561,200,20,40);
part19=new part(539,200,20,40);
part20=new part(580,130,20,40);
part21=new part(560,130,20,40)
part22=new part(570,100,20,40)
}

function draw(){
    background("white")
    Engine.update(engine);
    poly1.display();
   ground1.display();
    ground2.display();
    part1.display();
    part2.display();
    part3.display();
    part4.display();
    part5.display();
    part6.display();
    part7.display();
    part9.display();
    part10.display();
    part11.display();
    part12.display();
    part13.display();
    part14.display();
    part15.display();
    part16.display();
    part17.display();
    part18.display();
    part19.display();
    part20.display();
    part21.display();
    part22.display();
   
}




