var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start");
var initialID = document.getElementById("initial");
var submitBtn = document.getElementById("submit");
var clearBtn = document.getElementById("clear");
var goBackBtn = document.getElementById("goback");
var finalScore = document.getElementById("final-score");
var scoreListEl = document.getElementById("score-list");
var scoresBtn = document.getElementById("scores");
var rightWrong = document.getElementById("right-wrong");
var questionIndex = 0;
var timeLeft = 101;
var score = 0;
var penalty = 10;
var storedScores = JSON.parse(localStorage.getItem("score-list"));

// array of questions and answers for quiz
var questions = [
  {
    q: "What is the process of finding errors and fixing them within a program?",
    s: ["Debugging", "Scanning", "Executing", "Compiling"],
    a: "Debugging",
  },

  {
    q: "A loop that never ends is referred to as a what?",
    s: ["Recursive loop", "While loop", "Infinite loop", "for loop"],
    a: "Infinite loop",
  },

  {
    q: "Which command will stop an infinite loop?",
    s: ["Esc", "Ctrl - C", "Shift - C", "Alt - C"],
    a: "Ctrl - C",
  },

  {
    q: "During program development, software requirements specify what?",
    s: [
      "What the task is that the program must perform",
      "How the program will accomplish the task",
      "How to divide the task into subtasks",
      "How to test the program when it is done",
    ],
    a: "What the task is that the program must perform",
  },

  {
    q: "Which of the sets of statements below will add 1 to x if x is positive and subtract 1 from x if x is negative but leave x alone if x is 0?",
    s: [
      "If (x > 0) x++; else x--;",
      "If (x == 0) x = 0;else x++;x--;",
      "X++; x--;",
      "If (x > 0) x++; else if (x < 0) x--;",
    ],
    a: "If (x > 0) x++; else if (x < 0) x--;",
  },
];

// start quiz
var startQuiz = function () {
  countdownTimer();

  questionChange();

  hideWelcome();
};

function hideWelcome() {
  document.getElementById("starting-page").style.display = "none";
}

// Timer
function countdownTimer() {
  var timeInterval = setInterval(function () {
    if (questionIndex > 5 && timeLeft > 0) {
      timerEl.textContent = timeLeft;
    } else if (timeLeft > 0 && questionIndex < 5) {
      timeLeft--;
      timerEl.textContent = timeLeft;
    } else if (timeLeft === 0 && questionIndex < 5) {
      clearInterval(timeInterval);
      window.alert("Your time is up!");
      endQuiz();
    } else if (questionIndex === 5 || timeLeft === 0) {
      clearInterval(timeInterval);
      document.getElementById("question").style.display = "none";
    }
  }, 1000);
}

var endQuiz = function () {
  endQuiz();
};
function endQuiz() {
  document.getElementById("results");
}

// questions here
function questionChange() {
  var currentQuestion = questions[questionIndex];
  questionEl.innerText = currentQuestion.q;
  for (var i = 0; i < currentQuestion.s.length; i++) {
    var correctAnswer = currentQuestion.a;
    var answer = document.createElement("button");
    answer.classList.add("answer");
    var answerText = currentQuestion.s[i];
    answer.innerText = answerText;
    answer.setAttribute("value", answerText);
    answerEl.appendChild(answer);
    answer.addEventListener("click", function () {
      console.log(this.value);
      if (this.value == correctAnswer) {
        rightWrong.removeAttribute("hidden");
        rightWrong.textContent = "Good Job! You got it correct";
      } else {
        rightWrong.removeAttribute("hidden");
        rightWrong.textContent = "Sorry, that was incorrect";
        
        timeLeft -= penalty;
      }

      // hide previous answers but show current ones
      let allAnswers = document.querySelectorAll(".answer");
      allAnswers[0].remove();
      allAnswers[1].remove();
      allAnswers[2].remove();
      allAnswers[3].remove();

      questionIndex++;
      if(questionIndex < 5){
        questionChange()
      } else {
        endQuiz()
      }
    });
  }
}

// end button here
var endQuiz = function () {
  location.href = "results.html";
};

// var resultsPage = document.getElementById('results');

// enter initials and save score
function scoreScreen() {
  var input = document.createElement("initial");
  var body = document.body;
  var finalScore = timeLeft;
  var submit = document.createElement("button");

  initialID.textContent = finalScore;
  body.appendChild(h2El);

  input.setAttribute("id", "initial");
  input.placeholder = "Initials";
  body.appendChild(input);

  submit.className = "questionChoices";
  submit.textContent = "Submit";
  body.appendChild(submit);

  submit.addEventListener("click", function (event) {
    event.preventDefault();

    userInput.push(initials.value);
    storeScore();
    var Final = {
      Name: userInput,
      Score: timeLeft,
    };
    scores.push(Final);
    localStorage.setItem("Quiz Score", JSON.stringify(scores));
    scorePage();
  });
}

function scorePage() {
  location.href = "HighScore.html";
}

function storeScore() {
  localStorage.setItem("Name", [userInput]);
  localStorage.setItem("Score", timeLeft);
}

// final score screen
var highScore = function () {
  location.href = "https://ellysecarter.github.io/codingguru/highscore.html";
};

// function for go back button
var goBack = function () {
  location.href = "https://ellysecarter.github.io/codingguru/";
};

// function for the clear button
var clearHighScore = function () {
  localStorage.clear("score-list");
};

// Add event listeners to generate buttons
startBtn.addEventListener("click", startQuiz);

// submitBtn.addEventListener("click", "");

// clearBtn.addEventListener("click", "");

scoresBtn.addEventListener("click", highScore);

goBackBtn.addEventListener("click", goBack);
