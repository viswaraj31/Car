var database;
var form,player,game;
var gameState=0,playerCount;
var allPlayers;
var car1,car2,car3,car4;
var cars = []

function setup(){
    createCanvas(windowWidth-30,windowHeight);

    database=firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
   
    if(playerCount === 4){
        game.updateState(1);
    }
   
    if(gameState === 1){
        clear();
        game.play();
    }
}


