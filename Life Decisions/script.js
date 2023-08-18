const head = document.createElement("h2");
function bro() {
  const display = headTail();
  head.innerText = display;
  document.body.appendChild(head);

  const h2att = document.createAttribute("class");
  h2att.value = "head2";

  const h2 = document.getElementsByTagName("h2")[0];
  h2.setAttributeNode(h2att);

  // let uri = document.documentURI;
  // console.log(uri);

  // document.designMode = "on";
  const collection = document.getElementsByClassName("head1");
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.color = "red";
  }
  // document.getElementsByClassName("head1").style.color = "red";
}

function headTail() {
  let randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber >= 0.5) {
    return "Head";
  } else {
    return "Tail";
  }
}

addEventListener("click", bro);
