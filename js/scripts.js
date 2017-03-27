$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInputArray =[];
    var displayList = [];
    var someList = ["item1", "item2", "item3", "item4"];
    someList.forEach(function(sl){
      var userInput = $("#" + sl).val();
      userInputArray.push(userInput);
      userInputArray.sort();

    });
    var displayList = userInputArray.map(function(dl){
       return dl.toUpperCase();
    });

    displayList.forEach(function(dls){
      $("ul").append("<li>" + dls + "</li>");
    });
  });
});
