import discoverPlaces from "../data/discover-places.mjs";
const placesContainer = document.querySelector("#placesContainer");

const data = discoverPlaces;

function displayPlaces(data) {
  placesContainer.innerHTML = "";
  data.forEach((place) => {
    const placeDiv = document.createElement("div");
    placeDiv.innerHTML = `
        
            <div class="placeContent">
                <figure>
                    <img src="${place.photo_url}" alt="${place.name}" width="450" height="450"/>
                    <figcaption>Image of ${place.name}</figcaption>
                </figure>
                <div class="placeDiv">
                    <h3>${place.name}</h3>
                    <p>${place.description}</p>
                    <address>${place.address}</address>
                    <p><strong>Cost:</strong> ${place.cost}</p>
                    <button>Learn More</button>
                </div>
            </div>
        `;
    placesContainer.appendChild(placeDiv);
  });
}
displayPlaces(data);

