const url = "data/Quotes.json";
const quotesContainer = document.querySelector("#qoutesContainer");
let data = []
async function fetchQuotes(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Fetch Error: ${Error}`);
    }
    data = await response.json();
    displayQuotes();
    setInterval(displayQuotes, 9000);
  } catch (error) {
    console.log(error);
  }
}

function displayQuotes() {
  quotesContainer.innerHTML = "";

  const randomIndex = Math.floor(Math.random() * data.length);
  quotesContainer.innerHTML = `
  <p>${data[randomIndex].quote}</p>
   <p>- ${data[randomIndex].author}</p>`;
}

fetchQuotes(url);
