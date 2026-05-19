const memberSection = document.querySelector("#memberSection");
const gridToggle = document.querySelector("#gridView");
const listToggle = document.querySelector("#listView");

async function fetchMembers() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data);
    setMode("gridMode")
  } catch (error) {
    console.log(error);
  }
}

function displayMembers(data) {
  memberSection.innerHTML = "";
  data.forEach((member) => {
    const memberCard = document.createElement("div");
    memberCard.classList.add("memberCard")

    memberCard.innerHTML = `
    <img src="images/${member.image}" alt="${member.companyName} logo" title="${member.companyName} logo" loading="lazy" width="150" height="150">
    <h2>${member.companyName}</h2>
    <p>${member.address}</p>
    <a href="tel:${member.phone}" target="_blank">${member.phone}</a>
    <a href="${member.website}" target="_blank">${member.website}</a>
    `;

    memberSection.appendChild(memberCard);
  });
}

function setMode(mode) {
  memberSection.classList.remove("gridMode", "listMode")
  memberSection.classList.add(mode)
}

gridToggle.addEventListener("click", () => setMode("gridMode"))
listToggle.addEventListener("click", () => setMode("listMode"))

fetchMembers();
