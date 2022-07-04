// CORRECT ANSWER...

const form = document.querySelector("#form");

const pounds = document.querySelector("#pounds");

const result = document.querySelector("#result");

const poundsToDollars = 1.3;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const dollars = convertPounds(pounds.value);

  result.textContent = `You have $${dollars}`;
});

function convertPounds(pounds) {
  return (pounds * poundsToDollars).toFixed(2);
}
