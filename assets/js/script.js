
var questionEl = document.getElementById('#question')
var answerEl = document.getElementById('#answers')
var timerEl = document.getElementById('#countdown');
var mainEl = document.getElementById('#main');
var startBtn = document.getElementById('#start');
var initialID = document.getElementById('#initials')
var submitBtn = document.getElementById('#submit')
var clearBtn = document.getElementById('#clear')
var refreshBtn = document.getElementById('#refresh')
var finalScore = document.getElementById('#final-score')
var scoreListEl = document.getElementById('#score-list')
var scoresBtn = document.getElementById('#scores')


// array of questions and answers for quiz
var questions = [
    {index:1 q: "What is the process of finding errors and fixing them within a program", s:["Debugging", "Scanning", "Executing", "Compiling"], a: 0 },

    {index:2 q: "A loop that never ends is referred to as a what?", s: [ "Recursive loop", "While loop", "Infinite loop","for loop"], a: 2 },

    {index:3 q: "Which command will stop an infinite loop?", s: [ "Esc","Ctrl - C", "Shift - C", "Alt - C"], a: 1 },

    {index:4 q: "During program development, software requirements specify", s: ["What the task is that the program must perform", "How the program will accomplish the task", "How to divide the task into subtasks", "How to test the program when it is done"], a: 0 },

    {index:5 q: "Which of the sets of statements below will add 1 to x if x is positive and subtract 1 from x if x is negative but leave x alone if x is 0?", s: [, "If (x > 0) x++; else x--;", "If (x == 0) x = 0;else x++;x--;", "X++; x--;","If (x > 0) x++; else if (x < 0) x--;"], a: 3 }
]

// Start button
function startQuiz() {

// Timer 
function countdownTimer () {
    var timeLeft = 100;
    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft-10;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }




// Loop over every question object
for (var i = 0; i < questions.length; i++) {
  var answer = confirm(questions[i].q);
  if (
    (answer === true && questions[i].a === '0')
  ) {
    // decrease score
    score - 10;
    alert('Correct!'); 
  } else {
    alert('Wrong!');
  }
}





}function startQuiz()

// Add event listener to generate button
startBtn.addEventListener("click", startQuiz);

submitBtn.addEventListener("click", startQuiz);

clearBtn.addEventListener("click", startQuiz);

scoresBtn.addEventListener("click", startQuiz);