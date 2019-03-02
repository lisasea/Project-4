/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js 
 */

 class Phrase {  // create phrase class to handle the creation of phrases
    constructor(phrase) {
        this.phrase = phrase.toLowerCase(); 
    }

    addPhraseToDisplay() { // display phrase on gameboard - loop thru characters of phrase, create list item for each and append
        const phraseCharacters = document.querySelector('#phrase ul'); //should this be '#phrase ul'?
        for(let i=0; i<this.phrase.length; i++) {
            let phraseLi = document.createElement('li');
            phraseLi.textContent = this.phrase[i];
            if (phraseLi.textContent == ' ') {
                phraseLi.className = 'space';
            } else {
                phraseLi.className = `hide letter ${this.phrase[i]}`; // or just ? 'hide '; ?
            }
        phraseCharacters.appendChild(phraseLi);
        } 
    }

    checkLetter(letter) { // checks to see if letter player has chosen is in current phrase
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false; 
        }
    }

    showMatchedLetter(letter) { // reveals the letter(s) on the board that matches the player's selection.  
        if (this.checkLetter(letter)) {
            const matchLetter = document.querySelectorAll('.letter');
            for (let i = 0; i < matchLetter.length; i++) {
                if(matchLetter[i].textContent == letter) {
                matchLetter[i].classList.remove('hide'); 
                matchLetter[i].classList.add('show'); 
                }
            } 
        }
    }   
    
}





 /* Create a Phrase class in the Phrase.js file - to handle the creation of phrases.
The class should include a constructor that receives a phrase parameter and initializes the following properties:
XX phrase: this is the actual phrase the Phrase object is representing. This property should be set to the phrase parameter, but converted to all lower case.
The class should also have these methods:
X  addPhraseToDisplay(): this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter. See the example_phrase_html.txt file for an example of what the rendered HTML for a phrase should look like when the game starts, including any id or class attributes needed. When the player correctly guesses a letter, the empty box is replaced with the matched letter (see the showMatchedLetter() method below). Make sure the phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces.
X  checkLetter(): checks to see if the letter selected by the player matches a letter in the phrase.
X  showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.

Phrase.js to create a Phrase class to handle the creation of phrases.

*/




// addPhraseToDisplay() {} adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter. See the example_phrase_html.txt file for an example of what the rendered HTML for a phrase should look like when the game starts, including any id or class attributes needed. When the player correctly guesses a letter, the empty box is replaced with the matched letter (see the showMatchedLetter() method below). Make sure the phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces

// checkLetter() {} checks to see if the letter selected by the player matches a letter in the phrase

// showMatchedLetter() {} reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class


