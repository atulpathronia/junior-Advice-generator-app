"use strict";

const advice = document.querySelector("h2");
const adviceNum = document.querySelector(".adviceNum");
const button = document.querySelector(".btn");
console.log(advice);
console.log(adviceNum);

const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(data);
  adviceNum.innerHTML = `ADVICE # ${data.slip.id}`;
  advice.innerHTML = `${data.slip.advice}`;
};
fetchAdvice();

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetchAdvice();
  e.reset();
  button.reset();
});
