var hangManWords = [
  // "TOYOTA",
  // "HONDA",
  // "SUZUKI",
  // "MERCEDES",
  // "BMW",
  // "FERRARI",
  "AUDI",
  // "GMC",
];
function getRandomWord() {
  var randomWord =
    hangManWords[Math.floor(Math.random() * hangManWords.length)];

  return randomWord;
}
export { getRandomWord };
