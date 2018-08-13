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

let bet; //you can bet your maxBet if your maxBet = reserveCash
let reserveCash;

// 

// if you bet # < minBet, console below reads: "Bet must be a number between 1 and reserveCash. Fix this problem and press New Game again." && the "Your bet: " shakes on screen

// if you bet a # w/decimal, console reads "Bet must be a number between 1 and reserveCash. Fix this problem and press New Game again." && the "Your bet: " shakes on screen.

// if you bet a # > maxBet, console reads "Bet must be a number between 1 and reserveCash. Fix this problem and press New Game again."  && the "Your bet: " shakes on screen.



//EDITED CODE: 

if (bet < minBet || bet!== whole number || bet > maxBet) {
    console.log(`Bet must be a number between 1 and ${reserveCash}. Fix this problem and press New Game again.`);
    shakeBet();
}

/*
run round



*** function Loss

if you lose current round && your bet < reserveCash, reserveCash = reserveCash - bet
if you lose the current round && your bet > reserveCash, then for the next round, assign bet = reserveCash

Brandon's Code: 

// bet>reserveCash
// bet=reserveCash
// bet<reserveCash

// BEFORE
if (bet>reserveCash) {
    tell user ***
} else {
    run
}

// AFTER
//  WE LOST
    if (bet<reserveCash) {
        reserveCash -= bet
    } else {
        (busted stuff)
    }
//  WE WON
    (win stuff)


    



*** function Ultimate Loss

if reserveCash = 0, Your bet: BUSTED
if Your bet: reads BUSTED, shake the $0


*** function Gain

*** function Ultimate Win

if you win current round,  reserveCash += bet
if your reserveCash > maxBet, then you must withdraw. 
*/

/* let deck = [
    'Ace of Spades',
    'Two of Spades',
    'Three of Spades',
];
*/

//let playerCards = [deck[0], deck[2]];






//
console.log('Welcome to Blackjack!')

//Card variables
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two"];

//DOM variables
let textArea = document.getElementById("text-area");
let newGameButton = document.getElementById("new-game-button");
let hitButton = document.getElementById("hit-button");
let stayButton = document.getElementById("stay-button");

//Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = "none";
stayButton.style.display= "none";
showStatus();


newGameButton.addEventListener("click", function(){
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];

    newGameButton.style.display = "none";
    hitButton.style.display = "inline";
    stayButton.style.display = "inline";
    showStatus();
});


function createDeck() {
    let deck = [];
    for (let suitIndex=0; suitIndex<suits.length; suitIndex++){
        for (let valueIdx=0; valueIdx<values.length; valueIdx++){
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push(card);
        } 
    }
    return deck
}

function getCardString(card){
    return card.value + 'of' + card.suit;
}

function showStatus(){
    if (!gameStarted){
        textArea.innerText = "Welcome to Blackjack!";
        return;
    }
}

function getNextCard(){
    return deck.shift();
}

let deck= createDeck();

/*
for (let i=0; i<deck.length; i++){
    console.log(deck[i])
}
*/

let playerCards = [ getNextCard(), getNextCard() ];

console.log('You are dealt: ');
console.log(" " + getCardString( playerCards[0] );
console.log(" " + getCardString( playerCards[1] );






