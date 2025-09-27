export function displayDynamicText() {
  let dynamicTextArray = [
    "We are consistently advocating for a better business environment",
    "We are the leading voice of organised private sector",
    "We empower businesses to thrive through collaboration and innovation",
    "We create opportunities for sustainable economic growth",
  ];

  const textContainer = document.querySelector("#dynamic-text-wrapper");
  textContainer.innerHTML = "";

  const paragraph = document.createElement("p");
  textContainer.appendChild(paragraph);

  function showRandomText() {
    const randomIndex = Math.floor(Math.random() * dynamicTextArray.length);
    paragraph.textContent = dynamicTextArray[randomIndex];

    paragraph.classList.remove("fade");
    void paragraph.offsetWidth;
    paragraph.classList.add("fade");
  }
  showRandomText();
  setInterval(showRandomText, 5000);
}
