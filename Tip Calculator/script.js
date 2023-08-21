let totalText = document.getElementById("total-amount");
let tipText = document.getElementById("tip-amount");
let sliderText = document.getElementById("slider-text");

let tipSlider = document.getElementById("myRange");

function calculateTip() {
  refresh();
}

tipSlider.addEventListener("input", refresh);

function refresh() {
  let tipPercentage = tipSlider.value;
  sliderText.innerText = `PERCENTAGE: ${tipPercentage}%`;
  let input = parseFloat(document.getElementById("amount-input").value);
  //   console.log(input);
  let tip = (tipPercentage * input) / 100;
  let total = input + tip;

  if (isNaN(tip)) {
    tipText.innerText = `ENTER VALID BILL BRO`;
    totalText.style.visibility = "hidden";
  } else {
    totalText.style.visibility = "visible";
    tipText.innerText = `TIP: $${tip.toFixed(2)}`;
    totalText.innerText = `TOTAL: $${total.toFixed(2)}`;
  }
}
