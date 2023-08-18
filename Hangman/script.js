import { getRandomWord } from "./words.js";
let counter = 6;
let currentImageIndex = 1;
const counterElement = document.getElementById("counterValue");
var charGuessed;
var wordGuessed = "";

function buttonClicked(button) {
  charGuessed = button.innerText;
  var checkChar = checkCharacter(charGuessed, wordtoguess);
  if (checkChar) {
    button.remove();
    wordGuessed += charGuessed;
    console.log(wordGuessed);
    displayCharacter(charGuessed, wordtoguess);
  } else {
    button.remove();
    counter--;
    counterElement.textContent = counter;
    if (counter === 0) {
      window.location.href = "lost.html";
    } else {
      currentImageIndex++; // Increment the current image index
      const hangImage = document.getElementById("hangImage");
      hangImage.src = `hangme/hang_${currentImageIndex}.png`;
    }
  }
  checkWin();
}

function checkWin() {
  if (wordtoguess.split("").every((char) => wordGuessed.includes(char))) {
    window.location.href = "win.html";
  }
}

var wordtoguess = getRandomWord();
var wordLength = wordtoguess.length;

const underlineContainer = document.getElementById("underlineContainer");
// Loop to create and append the underlines
for (let i = 0; i < wordLength - 1; i++) {
  const underline = document.createElement("div");
  underline.classList.add("underline");
  underlineContainer.appendChild(underline);
}

//Button onclick
const buttons = document.querySelectorAll(".buttons > div");
buttons.forEach((button) => {
  button.addEventListener("click", () => buttonClicked(button));
});

function checkCharacter(charGuessed, wordtoguess) {
  if (wordtoguess.includes(charGuessed)) {
    return true;
  } else {
    return false;
  }
}

function displayCharacter(charGuessed, wordtoguess) {
  const underlineContainer = document.getElementById("underlineContainer");
  const underlines = document.querySelectorAll(".underline");
  for (let i = 0; i < wordLength; i++) {
    if (wordtoguess[i] === charGuessed) {
      const character = document.createElement("div");
      character.textContent = charGuessed;
      character.style.position = "absolute";
      character.style.left = `${i * 69}px`; // Adjust the position of the character as needed
      character.style.fontSize = "30px"; // Increase font size
      character.style.fontFamily = "'Courier New', Courier, monospace";
      character.style.marginTop = "-25px";
      underlineContainer.appendChild(character);
      underlines[i].style.visibility = "hidden";
    }
  }
}
