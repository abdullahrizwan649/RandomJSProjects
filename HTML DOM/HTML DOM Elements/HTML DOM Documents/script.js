let fruits = ["Mango", "Passionfruit", "Peach"];
let currentFruitIndex = 0;

function phal() {
  const fruitList = document.getElementById("fruitlist");

  if (currentFruitIndex < fruits.length) {
    const node = document.createElement("li");
    const textNode = document.createTextNode(fruits[currentFruitIndex]);

    node.appendChild(textNode);
    fruitList.appendChild(node);

    currentFruitIndex++;
  }
}

function phalgone() {
  const fruitList = document.getElementById("fruitlist");
  fruitList.removeChild(fruitList.firstElementChild);
}

function clickSimulate() {
  document.getElementById("box").click();
}

function eventgone() {
  const box = document.getElementById("box");
  box.removeEventListener("click",click);
}
