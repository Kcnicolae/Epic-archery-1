const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase, computerBase, player, computer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	

   //Create Player Base and Computer Base Object
playerBase = new PlayerBase(windowWidth/2-275,random(450,height - 300),180,150);
computerBase = new ComputerBase(windowWidth/2+275,random(450,height - 300),180,150);
player = new Player(windowWidth/2-270,playerBase.body.position.y-152,50,180);
computer = new Computer(windowWidth/2+270, computerBase.body.position.y-152,50,180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
playerBase.display();
computerBase.display();
player.display();
computer.display();


   //display Player and computerplayer


}
