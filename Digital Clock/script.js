function getTime() {
  let time = document.getElementById("waqt");

  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  minutes = checkZero(minutes);
  seconds = checkZero(seconds);

  time.innerText = hours + ":" + minutes + ":" + seconds;
  setTimeout(getTime, 1000);
}

function checkZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
getTime();
