var database;
var gameState = 0;
var plCount;
var form,player,game;
var allp ;
var car1,car2,car3,car4,cars;
var car1i,car2i,car3i,car4i,ground,groundImg,track,trackImg;
var finPl;
var bronze_img, silver_img, gold_img;
function preload(){

  car1i = loadImage('images/car1.png');
  car2i = loadImage('images/car2.png');
  car3i = loadImage('images/car3.png');
  car4i = loadImage('images/car4.png');
  groundImg = loadImage('images/ground.png');
  trackImg = loadImage('images/track.png');

  bronze_img = loadImage("images/bronze.png");
  silver_img = loadImage("images/silver.png");
  gold_img = loadImage("images/gold.png");
}

function setup(){
  database = firebase.database();

  createCanvas(displayWidth -20,displayHeight -30);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  background("white");
  
  if (plCount === 4) {

    game.update(1);



  }

  if (gameState === 1) {

    clear();
    game.play();

  }
  if(gameState === 2 && player.rank === 4){
    game.end();
    
    game.display();
  }
  
 
  

}

