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
        const phrases = [ 
            new Phrase('Green eyed monster'),
            new Phrase('Wild goose chase'),
            new Phrase('Love is blind'),
            new Phrase('Dead as a doornail'),
            new Phrase('Forever and a day'),
        ];
        return phrases
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







