import { getReason } from "./reason.mjs";
import { getWeather } from "./weatherPrediction.mjs";
import { displayHeroDynamicText } from "./heroDynamicText.mjs";
import { displayModal } from "./modal.mjs";

document.addEventListener("DOMContentLoaded", () => {
  getReason();
  getWeather();
  displayHeroDynamicText();
  displayModal();
});

const navMenu = document.querySelector("#navMenu");
const navToggle = document.querySelector("#navToggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const currentDate = document.querySelector("#copyright");
currentDate.textContent =   `© ${new Date().getFullYear()}`
