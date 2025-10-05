export function displayHeroDynamicText() {
  const heroDynamicTextArray = [
    "code",
    "create",
    "build projects",
    "debug smarter",
    "think like a developer",
  ];

  const heroDynamicTextContainer = document.querySelector("#heroDynamicText");
  heroDynamicTextContainer.innerHTML = "";
  heroDynamicTextContainer.style.fontWeight = "500";
  heroDynamicTextContainer.style.fontSize = "1.8rem";

  function showHeroDynamicText() {
    const randomIndex = Math.floor(Math.random() * heroDynamicTextArray.length);
    heroDynamicTextContainer.textContent = heroDynamicTextArray[randomIndex];

    heroDynamicTextContainer.classList.remove("fadeUp");
    void heroDynamicTextContainer.offsetWidth;
    heroDynamicTextContainer.classList.add("fadeUp");
  }
  showHeroDynamicText();
  setInterval(showHeroDynamicText, 3000);
}
