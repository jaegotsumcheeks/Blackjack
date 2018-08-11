let card1= "Ace of spades";
card2= "Ten of hearts";

console.log("Welcome to Blackjack");

console.log("You are dealt: ");
console.log(" " + card1);
console.log(" " + card2);

//houseRules
const minBet = 5;
const maxBet = 2000;
const startCash = 100

let bet = 15; //assume that game has already started and you are losing money
let reserveCash= 35;

function refill = (currentCash) => {
if (currentCash < 10) {console.log()};
}
/* start check: is bet > currentCash
if yes, then assign bet =  currentCash 
