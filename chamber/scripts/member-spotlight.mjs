export function displaySpotlightMembers() {
  async function getmembers() {
    try {
      const response = await fetch("data/members.json");
      if (!response.ok) {
        throw Error("Error fetching file");
      } else {
        const data = await response.json();
        displayMembers(data);
        console.log(data);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  const displayMembers = (members) => {
    const companySpotlight = document.querySelector("#company");
    companySpotlight.innerHTML = "";

    const levelOneMembers = members.filter(m => m.membershipLevel == "1");
   
    const shuffled = levelOneMembers.sort(() => 0.5 - Math.random());

    const spotlight = shuffled.slice(0, 3);

    spotlight.forEach((member) => {
      const memberCard = document.createElement("div");
      memberCard.classList.add("member-card");

      const membershipLogo = document.createElement("div");
      membershipLogo.classList.add("membership-logos");

      const memberinfo = document.createElement("div");
      memberinfo.classList.add("member-info")

      const logo = document.createElement("img");
      logo.src = member.image;
      logo.alt = `logo of ${member.name}`;
      logo.loading = "lazy";
      logo.width = "500";
      logo.height = "500";

      const name = document.createElement("h3");
      name.innerHTML = member.name;

      const membershipLvl = document.createElement("p");
      membershipLvl.innerHTML = `Membership Level: ${member.membershipLevel}`;

      const phone = document.createElement("p");
      phone.innerHTML = `Contact: ${member.phone}`;

      const address = document.createElement("p");
      address.innerHTML = `Address: ${member.address}`;

      const websiteLink = document.createElement("a");
      websiteLink.href = member.website; 
      websiteLink.target = "_blank";
      websiteLink.textContent = `Visit Website`;

      membershipLogo.appendChild(logo);
      membershipLogo.appendChild(name);

      memberinfo.appendChild(membershipLvl);
      memberinfo.appendChild(phone);
      memberinfo.appendChild(address);
      memberinfo.appendChild(websiteLink);

      memberCard.appendChild(membershipLogo);
      memberCard.append(memberinfo);
      

      companySpotlight.appendChild(memberCard);
    });
  };

  getmembers();
}
