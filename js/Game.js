/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }

     createPhrases() { //quotes made famous by Shakespeare
        return phrases = [ 
            new phrase('Green eyed monster'),
            new phrase('Wild goose chase'),
            new phrase('Love is blind'),
            new phrase('Dead as a doornail'),
            new phrase('Forever and a day'),
        ]
     }

     getRandomPhrase() {
         let random = Math.floor(Math.random() * this.phrases.length);
         let randPhrase = this.phrases[random];
         return randPhrase;
     }
 }

/*
startGame
endGame
handleInteraction
checkForWin
removeLife
XX getRandomPhrase


*/







