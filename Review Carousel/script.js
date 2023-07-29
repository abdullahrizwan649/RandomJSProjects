const reviews = [
  {
    id: 1,
    name: "Hammad Qaiser",
    job: "Jobless",
    img: "kk.JPG",
    txt: "Hello! I am jobless. Please give job. I have to feed my dogs. They haven't eaten for two weeks. Oh shit! 2 weeks. I think they might dead. Let me go check on them :)",
  },

  {
    id: 2,
    name: "Abdul Moiz",
    job: "Kashmiri Freedom Fighter",
    img: "kashmir.JPG",
    txt: "Colonel! Please send men. I am under grave danger. These Indians are up my ass. I must hold! OVER AND OUT!",
  },
  {
    id: 3,
    name: "Ahmad Farid",
    job: "Celebrity",
    img: "cl.JPG",
    txt: "I am sasta SRK like very sasta like vvvv sasta thanks!",
  },
  {
    id: 4,
    name: "Abdullah Rizwan",
    job: "Pilot",
    img: "cutie.png",
    txt: "I love jahaz. Jahaz my fave, wow grape, thanks, jahaz grape. The one who cringes is cringe. Slamualaikum!",
  },
];

const image = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentCard = 0;

//load initial item

window.addEventListener("DOMContentLoaded", function () {
  assginCard(currentCard);
});

function assginCard(person) {
  const item = reviews[person];
  image.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.txt;
}

nextBtn.addEventListener("click", function () {
  currentCard++;
  if (currentCard > reviews.length - 1) {
    currentCard = 0;
  }
  assginCard(currentCard);
});

prevBtn.addEventListener("click", function () {
  currentCard--;
  if (currentCard < 0) {
    currentCard = reviews.length - 1;
  }
  assginCard(currentCard);
});

randomBtn.addEventListener("click", function () {
  window.location.href = "https://swiftgik.com/";
});
