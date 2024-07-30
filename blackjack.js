let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");
let start_btn = document.getElementById("start-btn");
let new_btn = document.getElementById("new-btn");
let cards = [];
let isAlive = false;
let sum = 0;
let hasBlackJack = false;
let chips = 0;

let player = {
  name: "Kaushal",
  chips: 200,
};

playerEl.textContent = player.name + ": $" + player.chips;

function randomeNumber() {
  let random = Math.floor(Math.random() * 13) + 1;

  if (random > 10) {
    return 10;
  } else if (random === 1) {
    return 11;
  } else {
    return random;
  }
}

function startGame() {
  let firstCard = randomeNumber();
  let secondCard = randomeNumber();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  hasBlackJack = false;
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += " " + cards[i];
  }
  if (sum <= 20) {
    messageEl.textContent = "Do you want to draw new card ?";
    start_btn.textContent = "Reset";
    new_btn.textContent = "HIT";
  } else if (sum === 21) {
    messageEl.textContent = "You got blackjack";
    hasBlackJack = true;
  } else {
    messageEl.textContent = "You are out of game";
    start_btn.textContent = "START GAME";
    new_btn.textContent = "-";
    isAlive = false;
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let thirdCard = randomeNumber();

    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
  }
}
