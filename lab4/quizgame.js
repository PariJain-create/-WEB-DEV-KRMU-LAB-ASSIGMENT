// JavaScript Quiz Game

const questions = [
      "National bird of India?",
      "Hottest planet?",
      "Largest ocean?",
      "Fastest land animal?",
      "Hardest natural substance?"
    ];

const answers = [
      "peacock",
      "venus",
      "pacific",
      "cheetah",
      "diamond"
    ];

let score = 0;

alert("Welcome to the Quiz Game! Answer the following questions:");

for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]).toLowerCase().trim();

    if (userAnswer === answers[i]) {
        alert("Correct!");
        score++;
    } else {
        alert("Incorrect! The correct answer is: " + answers[i]);
    }
}

alert("Quiz Over!\nYour final score is: " + score + " out of " + questions.length);
console.log("Final Score:", score);