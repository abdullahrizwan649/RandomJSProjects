let count_txt = document.getElementById("count");
let count = 0;
let plus_btn = document.getElementById("plus");
let sub_btn = document.getElementById("sub");
let reset_btn = document.getElementById("reset");

let warning = document.getElementById("warning");

count_txt.innerHTML = count;

function reset_count() {
  count = 0;
  count_txt.innerHTML = count;
}

function add_count() {
  count++;
  count_txt.innerHTML = count;
}

function sub_count() {
  if (count == 0) {
    sub_btn.disabled = true;
    warning.innerHTML = "Can't decrement further";
    warning.style.visibility = "visible";
    setTimeout(function () {
      warning.style.visibility = "hidden";
    }, 1000);
  } else {
    count--;
    count_txt.innerHTML = count;
  }
}
