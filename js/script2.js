$(document).ready(function(){
  var suits = ["of clubs", "of diamonds", "of spades", "of hearts"];
  var decks = [2,3,4,5,6,7,8,9,10, "Ace", "queen", "king", "jack"];

  suits.forEach(function(suit){
    decks.forEach(function(deck){
      $("ul").append("<li>" + deck + " " + suit + "</li>");
    });
  });
});
