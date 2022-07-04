// MY ANSWER
// Don't need a variable for username - it's only the password we're checking here, so only form and password for any events.

const form = document.querySelector("#form");
const password = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // This code below calls the checkPassword function (specified below) into the EventListener
  checkPassword(password.value);
});

function checkPassword(password) {
  if (password.length < 8) {
    console.log("Try again with more characters");
  } else {
    console.log("Thank you");
  }
}

// CORRECT ANSWER...

// const form = document.querySelector("#form");

// const password = document.querySelector("#password");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   checkPassword(password.value);
// });

// function checkPassword(password) {
//   if (password.length < 8) {
//     console.log("Your password is not allowed");
//   } else {
//     console.log("Your password is allowed");
//   }
// }
