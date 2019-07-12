var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "/Images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "/Images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "/Images/queen-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "/Images/queen-of-diamonds.png"
  }
];
var cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
      } else {
        alert("Sorry, try again.");
      }
}

function flipCard(cardId) {
    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    if(cardsInPlay.length === 2) {
        checkForMatch(); 
       }
       
}
flipCard(0);
flipCard(2);

