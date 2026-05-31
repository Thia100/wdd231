const memberLevelContainer = document.querySelector("#memberLevelContainer");
const dialog = document.querySelector("#dialog");

async function displayMemberLevel() {
  try {
    const response = await fetch("data/level-benefits.json");
    if (!response.ok) {
      console.log(error);
    }
    const data = await response.json();
    displayMemberLevelInfo(data);
  } catch (error) {
    console.log(error);
  }
}

function displayMemberLevelInfo(data) {
  memberLevelContainer.innerHTML = "";
  dialog.innerHTML = "";

  data.forEach((levelInfo) => {
    const levelCard = document.createElement("div");
    levelCard.classList.add("levelCard")
    levelCard.innerHTML = `
        <h3>${levelInfo.name}</h3>
        <button class="openModal">Learn More</button>
    `;
    memberLevelContainer.appendChild(levelCard);

    const openDialog = levelCard.querySelector(".openModal");
    openDialog.addEventListener("click", () => {
      dialog.innerHTML = `
            <div class="dialogHeader">
                <h4>${levelInfo.name}</h4>
                <button class="closeModal"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <p>${levelInfo.description}</p>
            <ul>
                ${levelInfo.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
            </ul>
        `;
      dialog.showModal();
      document.querySelector(".closeModal").addEventListener("click", () => {
        dialog.close();
      });
    });
  });
}

displayMemberLevel();

const timestamp = document.querySelector("#timestamp");
timestamp.value = new Date().toISOString();