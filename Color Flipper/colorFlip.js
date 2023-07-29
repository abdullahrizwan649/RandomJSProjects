function flip() {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);

  let color = "rgb(" + red + "," + green + "," + blue + ")";
  //finding the bgcolor property of the specific id

  document.getElementById("colorFlipper").style.backgroundColor = color;

}
