function getRandomCard() {
  return 5;
}
let messageEl = document.getElementById("message-el");
console.log(messageEl);
let sumEl = document.getElementById("sum-el");
// let sumEl=document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el");
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
     name : "per",
     chips : 200
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ":  $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
function startGame() {
  isAlive = true;
  renderGame();
}
function renderGame() {
  cardEl.textContent = "Cards : ";
  for (i in cards) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
    message = "do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Woohu you got Blackjack";
    hasBlackJack = true;
  } else {
    message = "You are out of Game ";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card); 
    console.log(cards);
    startGame();
  }
}
function replay() {
    window.location.reload();
}
