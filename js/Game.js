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
        this.resetGame();
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
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin() === true) {
                this.gameOver(true); // or just this.gameOver();
                //how/where do I reset disabled buttons at end of game?
            }
        }
    }
   
    checkForWin() { //are all letters revealed? game has been won
        const hidden = document.getElementsByClassName('hide letter'); //? 'hide' enough? should this be 'hide letter' (phrase.js line 19?)
        return hidden.length == 0;
        }

    removeLife() { //when miss letter remove a life / heart from scoreboard. 5 total.
        this.missed++;
        const hearts = document.querySelectorAll('#scoreboard .tries');
        const img = hearts[hearts.length - this.missed].children[0];
        img.src = 'images/lostHeart.png';
        if(this.missed == 5) {
            this.gameOver(false);
        }
    }


    gameOver(gameWon) {
        const winLoseMsg = document.getElementById('game-over-message'); // same result as querySelector but not as quick as getElemenbtbyId super fast!

        const restoreOverlay = document.querySelector('#overlay');
        restoreOverlay.style.display = 'flex';
        restoreOverlay.classList.remove('win', 'lose');
        if(gameWon) {
            winLoseMsg.innerText = 'Congratulations! You Won!!!'
            restoreOverlay.classList.add('win');
        } else {
            winLoseMsg.innerText = 'Bummer.  Want to try again?';
            restoreOverlay.classList.add('lose');
        }
    }
 


    resetGame() {
        const ul = document.querySelector('#phrase ul');
        ul.innerHTML = '';
        this.missed = 0;
        
        let keys = document.getElementsByClassName('key');
        for(let key of keys) { //key arbitrary. just a way to loop thru array of keys
        key.disabled = false;
        key.classList.remove('wrong', 'chosen'); 
        }
        const hearts = document.querySelectorAll('#scoreboard .tries');
        console.log(hearts);
        for(let heart of hearts) {
            heart.children[0].src = "images/liveHeart.png";
        }
    }

            // reset everything to empty strings and start over again....

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







