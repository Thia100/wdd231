import quotes from "../data/quotes.mjs";
const quotesContainer = document.querySelector("#quotesContainer");

function displayQuotes(quotes) {
  quotesContainer.innerHTML = "";

  const randomIndex = Math.floor(Math.random() * quotes.length);
  quotesContainer.innerHTML = `
  <p>${quotes[randomIndex].quote}</p>
   <p>- ${quotes[randomIndex].author}</p>`;
}

displayQuotes(quotes);
setInterval(() => {
  displayQuotes(quotes)
}, 9000);
