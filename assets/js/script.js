
var questionEl = document.getElementById('question')
var answerEl = document.getElementById('answers')
var timerEl = document.getElementById('countdown')
var mainEl = document.getElementById('main')
var startBtn = document.getElementById('start')
var initialID = document.getElementById('initials')
var submitBtn = document.getElementById('submit')
var clearBtn = document.getElementById('clear')
var refreshBtn = document.getElementById('refresh')
var finalScore = document.getElementById('final-score')
var scoreListEl = document.getElementById('score-list')
var scoresBtn = document.getElementById('scores')
var questionIndex = 0
var timeLeft = 101


// array of questions and answers for quiz
var questions = [
    {
      q: "What is the process of finding errors and fixing them within a program", 
      s:["Debugging", "Scanning", "Executing", "Compiling"], 
      a: "Debugging" 
    },

    {
      q: "A loop that never ends is referred to as a what?", 
      s: [ "Recursive loop", "While loop", "Infinite loop","for loop"], 
      a: "Infinite loop" },

    {
      q: "Which command will stop an infinite loop?", s: [ "Esc","Ctrl - C", "Shift - C", "Alt - C"], a: "Ctrl - C" },

    {
      q: "During program development, software requirements specify", s: ["What the task is that the program must perform", "How the program will accomplish the task", "How to divide the task into subtasks", "How to test the program when it is done"], a: "What the task is that the program must perform" },

    {
      q: "Which of the sets of statements below will add 1 to x if x is positive and subtract 1 from x if x is negative but leave x alone if x is 0?", s: [, "If (x > 0) x++; else x--;", "If (x == 0) x = 0;else x++;x--;", "X++; x--;","If (x > 0) x++; else if (x < 0) x--;"], a: "If (x > 0) x++; else if (x < 0) x--;" }
]


// start quiz
var startQuiz = function (){

  countdownTimer ()

  questionChange ()

}


// Timer 
function countdownTimer () {
    var timeInterval = setInterval(function() {

          if (questionIndex > 4 && timeLeft > 0){
        timerEl.textContent = timeLeft 

      }   else if (timeLeft > 0 && questionIndex < 4){
        timeLeft--;
        timerEl.textContent = timeLeft;
        
      }   else if (timeLeft < 0 && questionIndex < 4 ){
        clearInterval(timeInterval);
        // displayMessage = "Your time is up!"
      }
    },1000);
  }
  

  // display first ques and answers

  // if right answer move on to next ques and say "right answer"

  // if wrong answer move on to next ques and take off 10 seconds and display "wrong answer"



  // questions here
  function questionChange () {
    var currentQuestion = questions[questionIndex];    questionEl.innerText=currentQuestion.q
    for (var i = 0; i < currentQuestion.s.length; i++) {
     
      var correctAnswer=currentQuestion.a
      var answer=document.createElement("button")
      var answerText=currentQuestion.s[i]
      answer.innerText=answerText
      answer.addEventListener("click", function(){
        if( answerText==correctAnswer){
          console.log("true")
        } else {
          console.log("false")
        }
        console.log("Iclicked an answer")
      })
      answerEl.appendChild(answer)
      // var answer = (questions[i].q);
      // if (
      //   (answer === true && questions[i].a === '0');
      // }
    
  }
  }





// Add event listener to generate button
startBtn.addEventListener("click", startQuiz);

// submitBtn.addEventListener("click", "");

// clearBtn.addEventListener("click", "");

// scoresBtn.addEventListener("click", "");