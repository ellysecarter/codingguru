
var generateBtn = document.querySelector("#code");


// write questions here
function startQuiz() {
var questions = [

    { q: "What is the process of finding errors and fixing them within a program", s:["Debugging", "Scanning", "Executing", "Compiling"], a: 0 },

    { q: "A loop that never ends is referred to as a what?", ["Infinite loop", "Recursive loop", "While loop", "for loop"], a: '0' },
    { q: "Which command will stop an infinite loop?", ["Ctrl - C", "Esc", "Shift - C", "Alt - C"], a: '0' },
    { q: "During program development, software requirements specify", ["What the task is that the program must perform", "How the program will accomplish the task", "How to divide the task into subtasks", "How to test the program when it is done"], a: '0' },
    { q: "Which of the sets of statements below will add 1 to x if x is positive and subtract 1 from x if x is negative but leave x alone if x is 0?", ["If (x > 0) x++; else if (x < 0) x--;", "If (x > 0) x++; else x--;", "If (x == 0) x = 0;else x++;x--;", "X++; x--;"], a: '0' }
]




}function startQuiz()

// Add event listener to generate button
generateBtn.addEventListener("click", startQuiz);
