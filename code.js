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

$(document).ready(function () {
  for (var i = 0; i < quizquestions.length; i++){
    var questiondiv = $("<div>").text(quizquestions[i].question);
    var questionpickA = $("<button>").text(quizquestions[i].pickA);
    var questionpickB = $("<button>").text(quizquestions[i].pickB);
    var questionpickC = $("<button>").text(quizquestions[i].pickC);
    $(".container").append(questiondiv, questionpickA, questionpickB, questionpickC);

  }

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

  });

  


















});

   








//for (var i = 0; i < quizquestions.length; i++){
//function deliverquestion(){
    //var ques = quizquestions[i];
    //codequiz.innerHTML = "<p>" + ques.question + "</p>";
    //pickA.innerHTML = "<li>" + ques.pickA + "</li>";
    //pickB.innerHTML = "<li>" + ques.pickB + "</li>";
    //pickC.innerHTML = "<li>" + ques.pickC + "</li>"; 
    
    //deliverquestion();
//}

//var secondsleft = 60;
//var count = 0;




//var score = 0;
//function checkAnswer(answer){
    //if (quizquestions[i].correct === answer){
       // score++;
    //}
//}

//function result(){
  
//}



//var Timer;

//startquiz.addEventListener("click", function (){
//setTime();
//Timer = setinterval(setTime, 1000);
//deliverquestion();
//});

//}