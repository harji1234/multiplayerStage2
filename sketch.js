var gameState = 0;
var playerCount = 0;
var form;
var game, player;
var database;
var allPlayers


function setup() {
createCanvas(400,400);
database = firebase.database();
game = new Game()
game.getState()
game.start()
}
function draw () {
if(playerCount===2) {
    game.update(1)
}
if(gameState===1) {
    clear()
    game.play()
}

}



