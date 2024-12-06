//required for project
"use strict";
//trying to toggle dark/light mode but does not work.
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }
//trying to use this function to run my variables but can't think of how
//to simplify or if I should use if else statement? 
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
//I believe an array would go here of the correct numbers?
  }
  //i know i need to pass my game variables such as guessInput,guess and message.
  for (let i = 0; i < 5; i++) { 
    console.log(getRandomNumber(1, 10)); 
 }
 //product display was thinking of adding albums to sell or tab books.