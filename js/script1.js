$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var newArray = [];
    var inputSentence = $("#phrase").val();
    var inputArray = inputSentence.split(" ");

    inputArray.forEach(function(input){
      var len = input.length;
      if(len >= 3)
      {
        newArray.push(input);
      }
    });

    newArray.reverse();
    var outputString = newArray.join(" ");
    $("p").text(outputString);
  });
});
