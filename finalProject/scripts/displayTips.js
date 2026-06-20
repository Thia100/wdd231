const displayTipsContainer = document.querySelector("#displayTipsContainer");

const tipModal = document.querySelector("#tipModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const closeModal = document.querySelector("#closeModal");

const searchInput = document.querySelector("#searchInput");
const categoryFilter = document.querySelector("#categoryFilter");

let tips = [];
async function fetchStudyTips() {
  try {
    const response = await fetch("data/tips.json");

    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.status}`);
    }

    tips = await response.json();
    displayStudyTips(tips);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

function displayStudyTips(tips) {
  displayTipsContainer.innerHTML = "";

  if (tips.length === 0) {
    displayTipsContainer.innerHTML = "<p>No study tips match your search.</p>";
    return;
  }

  tips.forEach((tip) => {
    const div = document.createElement("div");
    div.classList.add("tipCard");

    div.innerHTML = `
      <h2>${tip.title}</h2>
      <p>${tip.category}</p>

      <div class="tipMeta">
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

function filterTips() {
  let filtered = tips;

  const searchValue = searchInput.value.toLowerCase();
  const categoryValue = categoryFilter.value;

  if (categoryValue !== "all") {
    filtered = filtered.filter(
      (tip) => tip.category.toLowerCase() === categoryValue.toLowerCase(),
    );
  }

  if (searchValue) {
    filtered = filtered.filter(
      (tip) =>
        tip.title.toLowerCase().includes(searchValue) ||
        tip.description.toLowerCase().includes(searchValue),
    );
  }

  displayStudyTips(filtered);
}

searchInput.addEventListener("input", filterTips);
categoryFilter.addEventListener("change", filterTips);

fetchStudyTips();
