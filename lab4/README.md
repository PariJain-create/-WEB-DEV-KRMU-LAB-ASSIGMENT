# JavaScript Quiz Game

This is a simple *JavaScript-based Quiz Game* that runs in the browser using alert() and prompt() functions. The player answers a series of general knowledge questions and receives a final score at the end.

---

## 📌 Features
- Asks 5 quiz questions one by one
- Immediate feedback: Correct / Incorrect
- Shows the correct answer if user is wrong
- Displays final score after all questions
- Logs the score in the browser console

---

## 🧠 Questions & Answers
| Question | Correct Answer |
|----------|----------------|
| National bird of India? | Peacock |
| Hottest planet? | Venus |
| Largest ocean? | Pacific |
| Fastest land animal? | Cheetah |
| Hardest natural substance? | Diamond |

---

## 💻 How to Run
1. Create two files:
   - index.html
   - script.js
2. Add your quiz code to script.js
3. Link the JavaScript file to index.html
4. Open index.html in your web browser

---

## 🧾 JavaScript Code
```js
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