/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 

let game;

document.getElementById('btn__reset').addEventListener('click', function() {
    game = new Game();
    game.startGame();
});

let keys = document.getElementsByClassName('key');
for(let key of keys) { //key arbitrary. just a way to loop thru array of keys
    key.addEventListener('click', function(event) {
        game.handleInteraction(event.target); // button is the event target where click happened
    });
}




//Step 1 instructions create new instance of the 'Game' class
//Step 1 " "   add event listeners for start button
//Step 1 " "   add event listeners for onscreen keyboard buttons
/*
const phrase = new Phrase('Life is like a box of chocolates'); // temporary code Step 3 to make sure you can create instancres of each class
const game = new Game(); // temporary code Step 3 "   "

console.log(`Phrase - phrase: ${phrase.phrase}`); //temporary code Step 3

game.phrases.forEach((phrase, index) => {
    console.log(`Phrase ${index} - phrase: ${phrase.phrase}`); // temporary code Step 4
})



const logPhrase = (phrase) => { //temp code Step 5
    console.log(`Phrase - phrase: `, phrase.phrase);
};


const game = new Game(); //temp code Step 5 works

logPhrase(game.getRandomPhrase()); //temp code Step 5
logPhrase(game.getRandomPhrase()); //temp code Step 5
logPhrase(game.getRandomPhrase()); //temp code Step 5
logPhrase(game.getRandomPhrase()); //temp code Step 5
logPhrase(game.getRandomPhrase()); //temp code Step 5

*/

//const game = new Game(); // temp code Step 6 works
//game.getRandomPhrase().addPhraseToDisplay(); // temp code Step 6

/*
const game = new Game(); // temp Step 6 
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();


const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

/* I think you just need to create the resetDisplay() function and  markButton() function in app.js. You can also disable highlighting the letters on the board with
```#phrase ul li {user-select: none;}```
. Other than that it's looking good! :

Create a README.md file for your repo that explains what the project is and anything your user or fellow developers might need to know to use the project.

An index.html file with the basic HTML markup.
A css folder containing two CSS files with the basic CSS styles for the game.
An images folder containing two image files that are used for the game's scoreboard.
A js folder containing the following JavaScript files:
app.js to create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons.
Phrase.js to create a Phrase class to handle the creation of phrases.
Game.js to create a Game class with methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.

and  And thank your sister for the suggestion to show the answer at the end. 

 use JavaScript and OOP (Object-Oriented Programming) to 
 select a random, hidden phrase, 
 Player guesses by clicking letters on an onscreen keyboard
 
 create two JavaScript classes with specific properties and methods
    create a Game class for managing the game, and a 
    create a Phrase class to help with creating an array of Phrase objects.

Your code will choose a random phrase, split the phrase into letters, and put those letters onto the gameboard

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, your programming will need to disable that letter on the onscreen keyboard.


in the app.js file:
Create a new instance of the `Game` class and add event listeners for the start button and onscreen keyboard buttons:
Add a click event listener to the "Start Game" button which creates a new Game object and starts the game by calling the startGame() method.
Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the handleInteraction() method on the Game object. Event delegation can also be used in order to avoid having to add an event listener to each individual keyboard button. Clicking the space between and around the onscreen keyboard buttons should not result in the handleInteraction() method being called.


//Not sure which js file this code goes into ... but need to:
Resetting the gameboard between games.
After a game is completed, the gameboard needs to be reset so that clicking the "Start Game" button will successfully load a new game.
Remove all li elements from the Phrase ul element.
Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes.
Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.

app.js to create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons.

// create new instance of the game 'class
// add event listener for the start button
// add event listener for the onscreen keyboard buttons
// (extra credit) add event listener for real keyboard

*/


