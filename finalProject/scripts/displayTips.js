const displayTipsContainer = document.querySelector("#displayTipsContainer");

const tipModal = document.querySelector("#tipModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const closeModal = document.querySelector("#closeModal");

async function fetchStudyTips() {
  try {
    const response = await fetch("data/tips.json");

    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.status}`);
    }

    const data = await response.json();
    displayStudyTips(data);

  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

function displayStudyTips(data) {
  displayTipsContainer.innerHTML = "";

  data.forEach((tip) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h2>${tip.title}</h2>
      <p>${tip.category}</p>

      <div>
        <p>${tip.difficulty}</p>
        <p>${tip.time}</p>
      </div>

      <button class="openModal">Read More</button>
    `;

    const openModalBtn = div.querySelector(".openModal");

    openModalBtn.addEventListener("click", () => {
      modalTitle.textContent = tip.title;

      modalDescription.innerHTML = `
        ${tip.description}
        <br><br>
        <strong>Category:</strong> ${tip.category}<br>
        <strong>Difficulty:</strong> ${tip.difficulty}<br>
        <strong>Time:</strong> ${tip.time}
      `;

      tipModal.showModal();
    });

    displayTipsContainer.appendChild(div);
  });
}

closeModal.addEventListener("click", () => {
  tipModal.close();
});

fetchStudyTips();