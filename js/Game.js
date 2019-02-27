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

    startGame() { //begins game, selects random phrase, hides start screen overlay 
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction(button) { //letter selected by player 
        button.disabled = true;
        const letter = button.textContent;
        if(!this.activePhrase.checkLetter(letter)) { //is not a letter in active phrase remove "heart/life"
            button.classList.add('wrong');
            this.removeLife();
        } else {
            button.classList.add('chosen'); // is a letter in active phrase - check to see if game is won
            if(this.checkForWin() === true) {
                this.gameOver(true); // or just this.gameOver();
                //how/where do I reset disabled buttons at end of game?
            }
        }
    }
   
    //does this need to be above handleInteraction?
    checkForWin() { //are all letters revealed? game has been won
        const hidden = document.getElementsByClassName('hide letter'); //? 'hide' enough? should this be 'hide letter' (phrase.js line 19?)
        if(!hidden) { //if no letters remain hidden game has been won
            return true;
        } else { //Jennifer is this else statement redundant? can it be deleted?
            return false;
        }
    }

    
    removeLife() { //when miss letter remove a life / heart from scoreboard. 5 total.
        this.missed++;
        if (this.missed < 5) {  
            const hearts = document.querySelectorAll('#scoreboard .tries');
            const img = hearts[hearts.length - this.missed].children[0];
            img.src = 'images/lostHeart.png';
        } else {
            this.gaveOver(); //should this be (true) (false)?
        }
    }

    gameOver() {
        const 
        const winLoseMsg = document.querySelector('game-over-message');
        const restoreOverlay = document.querySelector('#overlay');
        restoreOverlay.style.display = 'block';
        restoreOverlay.classList = '';
       // if checkForWin = = 'true' {   //I know checkForWin above does not have global scope
        if 
       

    }

    //after game is over how do I remove disabled class before next game begins?


 }

/*
XX startGame
endGame
XX handleInteraction
XX checkForWin
XX removeLife
XX getRandomPhrase


*/







