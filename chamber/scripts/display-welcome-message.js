const welcomeMessageContainer = document.querySelector(
  "#welcomeMessageContainer",
);


const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
  welcomeMessageContainer.textContent =
    "Welcome! Let us know if you have any questions.";
} else {
  const difference = currentVisit - Number(lastVisit);

  const daysBetween = Math.floor(difference / (1000 * 60 * 60 * 24));

   if (daysBetween < 1) {
    welcomeMessageContainer.textContent = "Back so soon! Awesome!";
  } else if (daysBetween === 1) {
    welcomeMessageContainer.textContent = "You last visited 1 day ago.";
  } else {
    welcomeMessageContainer.textContent = `You last visited ${daysBetween} days ago.`;
  }
}
localStorage.setItem("lastVisit", currentVisit);


const closeMessageContainer = document.querySelector("#closeMessageContainer");
const welcomeMessage = document.querySelector(".welcomeMessage")

closeMessageContainer.addEventListener("click", () => {
    welcomeMessage.style.display = "none"
})
