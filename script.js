"use strict";

let currentGuessCount = 1;
let currentGuess = document.querySelector(".guess");
//let currentLetters = currentGuess.dataset.letters;

document.addEventListener("keydown", (event) => {
  const keyPress = event.key;
  const alphabeticPattern = /^[a-zA-Z]$/;

  if (alphabeticPattern.test(keyPress)) {
    console.log(keyPress);
    // console.log(isLetter)
    currentGuess.dataset.letters = keyPress;
  } else {
    alert("Not an alphabet");
  }
});

//Update letter attribute func
const updateLetters = (letter) => {
  console.log("Update letter - ", letter);
  console.log("CurrentGuess Count - ", currentGuessCount);
  console.log("current guess - ", currentGuess);
  currentGuess = currentGuess + letter;
  console.log("current guess updated - ", currentGuess);
};

//Update tile markup
const updateTiles = () => {};
