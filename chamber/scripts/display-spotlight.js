const spotlightContainer = document.querySelector("#spotlightContainer");

async function fetchMembers() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.log(error);
  }
}

function displayMembers(data) {
  spotlightContainer.innerHTML = "";

  const qualifiedMembers = data.filter(
    (member) => member.membershipLevel === 1 || member.membershipLevel === 2,
  );
  const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  selected.forEach((member) => {
    const memberCard = document.createElement("div");
    memberCard.classList.add("memberCard");

    memberCard.innerHTML = `
    <img src="images/${member.image}" alt="${member.companyName} logo" width="50" height="50"/>
    <h2>${member.companyName}</h2>
    <p>Membership Level: ${member.membershipLevel}</p>
    <p>${member.address}</p>
    <a href="tel:${member.phone}" target="_blank">${member.phone}</a>
    <a href="${member.website}">${member.website}</a>
    `;

    spotlightContainer.appendChild(memberCard);
  });
}

fetchMembers();
