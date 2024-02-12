const cl = console.log.bind(console);
/*
=============== 
navbar
===============
*/
const links = document.querySelector(".links");
const navBtn = document.querySelector(".nav-btn");

function action(e) {
  let check = links.classList.contains("show");
  if (check) {
    links.classList.remove("show");
  } else {
    links.classList.add("show");
  }
}

navBtn.addEventListener("click", action);

/*
=============== 
info section
===============
*/

const form = document.querySelector(".form");
const name1 = document.querySelector(".player-one");
const name2 = document.querySelector(".player-two");
const alert = document.querySelector(".alert");
const gameSection = document.querySelector(".game-section");
const pName1 = document.querySelector(".player1-name");
const pName2 = document.querySelector(".player2-name");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value1 = name1.value;
  const value2 = name2.value;
  if (value1 == "" && value2 == "") {
    displayAlert("Please fill in all the fields", "danger");
  } else if (value1 == "") {
    displayAlert("Please fill in all the fields", "danger");
  } else if (value2 == "") {
    displayAlert("Please fill in all the fields", "danger");
  } else {
    form.classList.add("hide-form");
    gameSection.classList.add("show-game");
    pName1.textContent = value1;
    pName2.textContent = value2;
  }
});

// alert
function displayAlert(text, type) {
  alert.classList.add(`alert-${type}`);
  alert.textContent = text;
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${type}`);
  }, 1000);
}

// random number generators
function randomNo1() {
  let generator = Math.floor(Math.random() * 7);
  if (generator === 0) {
    generator++;
    return generator;
  } else {
    return generator;
  }
}
function randomNo2() {
  let generator = Math.floor(Math.random() * 7);
  if (generator === 0) {
    generator++;
    return generator;
  } else {
    return generator;
  }
}
const start = document.querySelector(".start-btn");
const replay = document.querySelector(".replay-btn");
const newGame = document.querySelector(".newGame-btn");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const winner = document.querySelector(".game-title");

start.addEventListener("click", function () {
  game();
  start.classList.add("hide-game");
});
replay.addEventListener("click", function () {
  game();
});
newGame.addEventListener("click", function () {
  form.classList.remove("hide-form");
  gameSection.classList.remove("show-game");
  start.classList.remove("hide-game");
  winner.textContent = `welcome! players`;
  const imgValue1 = `./images/red/${1}.png`;
  img1.src = imgValue1;
  const imgValue2 = `./images/red/${1}.png`;
  img2.src = imgValue2;
});

// game code
function game() {
  const n1 = randomNo1();
  const n2 = randomNo2();
  const imgValue1 = `./images/red/${n1}.png`;
  img1.src = imgValue1;
  const imgValue2 = `./images/red/${n2}.png`;
  img2.src = imgValue2;
  cl(n1);
  cl(n2);
  if (n1 > n2) {
    winner.textContent = `${name1.value} is the winner`;
  } else if (n1 < n2) {
    winner.textContent = `${name2.value} is the winner`;
  } else {
    winner.textContent = `draw`;
  }
}
