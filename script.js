'use strict';
const checkBtn = document.querySelector(".check")
const numberinput = document.querySelector(".number-input")
const guessMessage = document.querySelector(".guess-message")
const question = document.querySelector(".question")


const secretNumber = Math.trunc(Math.random() * 20) + 1
question.textContent = secretNumber

checkBtn.addEventListener("click", function () {
  const guessingNumber = Number(numberinput.value)

  if (!guessingNumber) {
    guessMessage.textContent = "Введите число!"
  }
})