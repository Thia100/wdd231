import { displayDynamicText } from "./dynamic-text.mjs";
import { displaySpotlightMembers } from "./member-spotlight.mjs";
import { getWeatherData } from "./weather.mjs";

document.addEventListener("DOMContentLoaded", () => {
  displayDynamicText();
  getWeatherData();
  displaySpotlightMembers();
});


const toggle = document.querySelector("#nav-toggle");
const menu = document.querySelector("#nav-menu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
});

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.querySelector("#currentyear").textContent = `© ${currentYear}`;
document.querySelector(
  "#last-modified"
).textContent = `Last Modified ${lastModified}`;
