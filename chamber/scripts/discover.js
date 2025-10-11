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

async function getPlaces() {
  try {
    const response = await fetch("./data/places.json");
    if (!response.ok) {
      throw new Error("Error fetching file");
    } else {
      const data = await response.json();
      displayPlaces(data);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayPlaces(item) {
  const placeSpotlightContainer = document.querySelector(
    "#placeSpotlightContainer"
  );
  placeSpotlightContainer.innerHTML = "";

  item.forEach((place) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const textContainer = document.createElement("div");
    textContainer.classList.add("textContainer");

    const h2 = document.createElement("h2");
    h2.innerHTML = place.name;

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = place.photo_url;
    img.loading = "lazy";
    img.width = "420";
    img.height = "420";
    img.alt = `${place.name}`;
    const figcaption = document.createElement("figcaption");
    figcaption.innerHTML = place.name;
    figure.appendChild(img);
    figure.appendChild(figcaption);

    const address = document.createElement("address");
    address.innerHTML = place.address;

    const description = document.createElement("p");
    description.innerHTML = place.description;

    textContainer.appendChild(description);
    textContainer.appendChild(address);

    const button = document.createElement("button");
    button.innerHTML = "Learn More";

    card.appendChild(h2);
    card.appendChild(figure);
    card.appendChild(textContainer);
    card.appendChild(button);

    placeSpotlightContainer.appendChild(card);
  });
}

getPlaces();

function getLastVisit() {
  const LastVisit = Number(localStorage.getItem("lastVisit"));
  const currentVisit = Date.now();
  localStorage.setItem("lastVisit", currentVisit);

  const days = Math.floor((currentVisit - LastVisit) / 86400000);

  if (!LastVisit) {
    alert("Welcome! Let us know if you have any questions.");
  } else if (days < 1) {
    alert("Back so soon! Awesome!");
  } else if (days === 1) {
    alert(`You last visited ${days} day ago`);
  } else {
    alert(`You last visited ${days} days ago`);
  }
}
getLastVisit();
