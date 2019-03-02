/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 
let game; //event listener to reset or start a new game
document.getElementById('btn__reset').addEventListener('click', function() {
    game = new Game();
    game.startGame();
});

let keys = document.getElementsByClassName('key'); //event listener to handle onscreen keyboard buttons / letters when clicked
for(let key of keys) { 
    key.addEventListener('click', function(event) {
        game.handleInteraction(event.target); 
    });
}