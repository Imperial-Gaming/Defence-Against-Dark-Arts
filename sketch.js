var backgroundImage;

//var gameState = 0;
//var playerCount;
//var allPlayers;
//var distance = 0;
//var database;

var obstacle1, godzilla, magma, soldier, robot;

var boy, girl;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
 obstacle1 = loadImage("../images/obstacle1.png");
  robot = loadImage("../images/robot.png");
 godzilla = loadImage("../images/godzilla.png");
  download = loadImage("../images/download.png");
  soldier = loadImage("../images/soldier.png");
 magma = loadImage("../images/magma.png");
 background1 = loadImage("../images/background.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
  Harry = createSprite(200, displayHeight-200, 100, 150);
  Harry.addImage(download);
}


function draw(){
  background(background1);
  drawSprites();
}
