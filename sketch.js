var dataBase,gameState=0;
var player,form,game,playerCount=0;

function setup(){

    createCanvas(700,600)

    game = new Game();
    game.getState();
    game.startState();

}
