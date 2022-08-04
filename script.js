'use strict';
const checkBtn = document.querySelector(".check")
const numberinput = document.querySelector(".number-input")
const guessMessage = document.querySelector(".guess-message")
const question = document.querySelector(".question")
const score = document.querySelector(".score")
const body = document.querySelector("body")
const againBtn = document.querySelector(".again")
const highscore = document.querySelector(".highscore")

let secretNumber = Math.trunc(Math.random() * 20) + 1
let scoreNum = 20
let record = 0

checkBtn.addEventListener("click", function () {
  const guessingNumber = Number(numberinput.value)

  //empty input
  if (!guessingNumber) {
    guessMessage.textContent = "Введите число!"
  }

  //correct number
  else if (guessingNumber === secretNumber) {
    guessMessage.textContent = "Правильно!"
    question.textContent = secretNumber
    body.style.backgroundColor = "green"
    question.style.width = "50rem"

    if (scoreNum > record) {
      record = scoreNum
      highscore.textContent = record
    }
  }

  // wrong number
  else if (guessingNumber !== secretNumber) {
    if (scoreNum > 1) {
      guessMessage.textContent = (guessingNumber < secretNumber) ? "Слишком мало!" : "Слишком много!"
      scoreNum--
      score.textContent = scoreNum
    } else {
      guessMessage.textContent = "Game over!"
      score.textContent = 0
      body.style.backgroundColor = "red"
    }
  }
})

//restart
againBtn.onclick = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1
  guessMessage.textContent = "Начни угадывать!"
  score.textContent = 20
  numberinput.value = ''
  question.textContent = "???"
  body.style.backgroundColor = "#000"
  question.style.width = "25rem"
  scoreNum = 20
}