var soundArray = ["E", "R", "F", "G", "H", "V", "J", "I", "K"];

function drummy(character) {
  for (var i = 0; i < soundArray.length; i++) {
    if (character === soundArray[i]) {
      const audio = new Audio(`./sounds/${soundArray[i]}.wav`);
      if (audio) {
        audio.play();
      } else {
        console.error(`Audio file not found: ${soundArray[i]}.wav`);
      }
      return;
    }
  }
}

document.onkeydown = function (e) {
  var key_press = e.key.toUpperCase();
  console.log(key_press);
  const audio = new Audio(`./sounds/${key_press}.wav`);
  if (audio) {
    audio.play();
  }
};
