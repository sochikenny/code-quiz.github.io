var clock = document.getElementById("Timer");
var codequiz = document.getElementById("Quiz");
var startquiz = document.getElementById("start");
var submitquiz = document.getElementById("submit");
var quizresult = document.getElementById("result");
var pickA = document.getElementById("A");
var pickB = document.getElementById("B");
var pickC = document.getElementById("C");


var quizquestions = [
    {
      question: "Who was the richest person in the history of the world", 
       pickA: "JD Rockefellar",
       pickB: "Mansa Musa",
       pickC: "Jeff Bezos",
      correctAnswer: "b"
    },
    {
      question: "Which country has the second largest black population in the world",
        pickA: "Nigeria",
        pickB: "South Africa",
        pickC: "Brazil",
      correctAnswer: "c"
    },
    {
      question: "What college did Michelle Obama attend for her undergrad",
        pickA: "Harvard",
        pickB: "Yale",
        pickC: "Princeton",
      correctAnswer: "c"
    }
  ];

for (var i = 0; i < quizquestions.length; i++){
function deliverquestion(){
    var ques = quizquestions;
    question.innerHTML = "<p>" + ques.question + "</p>";
    pickA.innerHTML = ques.pickA;
    pickB.innerHTML = ques.pickB;
    pickC.innerHTML = ques.pickC;
    
    deliverquestion();
}

var secondsleft = 60;
var count = 0;

function setTime() {
  var timerinterval = setInterval(function(){
    secondsleft--;
    if (secondsleft === 0){
    clearInterval(timerinterval);
    result();
    }
    else {
      deliverquestion();
    }
  }, 60000);
}

var score = 0;
function checkAnswer(answer){
    if (quizquestions[i].correct === answer){
        score++;
    }
}

function result(){
  
}



var Timer;

startquiz.addEventListener("click", function (){
setTime();
Timer = setinterval(setTime, 1000);
deliverquestion();
});

}