var quizquestions = [
    {
      question: "Who was the richest person in the history of the world?",

       picks: ["JD Rockefellar",
                "Mansa Musa",
                "Jeff Bezos"],

      correctAnswer: "Mansa Musa"
    },
    
    {
      question: "Which country has the second largest black population in the world?",

        picks: ["Nigeria",
                "South Africa",
                "Brazil"],

      correctAnswer: "Brazil"
    },

    {
      question: "What college did Michelle Obama attend for her undergrad?",

        picks: ["Harvard",
                 "Yale",
                 "Princeton"],

      correctAnswer: "Princeton"
    }
  ];

  //placing questions on page
$(document).ready(function () {
  for (var i = 0; i < quizquestions.length; i++){
    var questiondiv = $("<div>").text(quizquestions[i].question);
    var pickA = $("<button>").text(quizquestions[i].picks[0]);
    var pickB = $("<button>").text(quizquestions[i].picks[1]);
    var pickC = $("<button>").text(quizquestions[i].picks[2]);
    $(".container").append(questiondiv, pickA, pickB, pickC);

    var count = 0;
    var userResponse = quizquestions[i].picks[i];
      if (userResponse === quizquestions[i].correctAnswer){
        count++
        alert(count); 
      }
    
  
  }

//On click event: when you click start, the timer starts running
  $(".start").on("click", function() {
  
      function setTime(){
        var timeEl = $(".timer");
        var secondsleft = 30;
        var timerinterval = setInterval(function(){
        secondsleft--;
        timeEl.text(secondsleft + " seconds left ");
        if (secondsleft === 0){
          clearInterval(timerinterval);
        }
      }, 1000);
  
    }
    setTime();


    //need to put renderScore function here
  });
 
 //$(".submit").on("click", function(){
 
  //for (var i = 0; i < quizquestions.length; i++){
    //$("button").on("click", function(){
      //var count = 0;
      //var userResponse
    //});
  //function renderScore(){
    //var count = 0;
    //var userResponse = quizquestions[i].picks[i];
    //if (userResponse === quizquestions[i].correctAnswer[i]){
      //count++
      //alert(count); 
    //}
  //}
//}

  //create an on click event for submit that will give score to user (basically a submit onclick and inside there will be the renderScore function)
  //creating a new function called renderScore (will show score)
  //clicking answer choices will be involved and tallying the score


  


















});

   






//var score = 0;
//function checkAnswer(answer){
    //if (quizquestions[i].correct === answer){
       // score++;
    //}
//}

//function result(){
  
//}



