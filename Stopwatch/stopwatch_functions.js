let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let time = document.getElementById("displayTime");
let time_run_check = null;

function stopwatch() {
  milliseconds++;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minutes++;

      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

  time.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

function watchStart() {
  //if timer already running, reset it basically
  if (time_run_check !== null) {
    clearInterval(time_run_check);
  }
  time_run_check = setInterval(stopwatch, 10);
}

function actuallyStop() {
  clearInterval(time_run_check);
}

function resetWatch() {
  clearInterval(time_run_check);
  [seconds, minutes, hours] = [0, 0, 0];
  time.innerHTML = "00:00:00";
}
