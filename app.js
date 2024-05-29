const form = document.querySelector("form");
const colorOne = document.getElementById("color-one").value;
const colorTwo = document.getElementById("color-two").value;
const range = document.getElementById("range").value;
const submit = document.getElementById("submit");
let container = document.querySelector(".container");

form.addEventListener("submit", (e) => {
  const gradient = `linear-gradient(${range}deg, ${colorOne}, ${colorTwo})`;
  document.body.style.backround = gradient;
  console.log(gradient);
  e.preventDefault();
});
