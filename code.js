var quizquestions = [
    {
      question: "Who was the richest person in the history of the world?", 
       pickA: "JD Rockefellar",
       pickB: "Mansa Musa",
       pickC: "Jeff Bezos",
      correctAnswer: "b"
    },
    {
      question: "Which country has the second largest black population in the world?",
        pickA: "Nigeria",
        pickB: "South Africa",
        pickC: "Brazil",
      correctAnswer: "c"
    },
    {
      question: "What college did Michelle Obama attend for her undergrad?",
        pickA: "Harvard",
        pickB: "Yale",
        pickC: "Princeton",
      correctAnswer: "c"
    }
  ];

  //placing questions on page
$(document).ready(function () {
  for (var i = 0; i < quizquestions.length; i++){
    var questiondiv = $("<div>").text(quizquestions[i].question);
    var questionpickA = $("<button>").text(quizquestions[i].pickA);
    var questionpickB = $("<button>").text(quizquestions[i].pickB);
    var questionpickC = $("<button>").text(quizquestions[i].pickC);
    $(".container").append(questiondiv, questionpickA, questionpickB, questionpickC);

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

  //create an on click event for submit that will give score to user (basically a submit onclick and inside there will be the renderScore function)
  //creating a new function called renderScore (will show score)


  


















});

   






//var score = 0;
//function checkAnswer(answer){
    //if (quizquestions[i].correct === answer){
       // score++;
    //}
//}

//function result(){
  
//}



