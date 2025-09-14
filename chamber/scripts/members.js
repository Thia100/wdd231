const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

const display = document.querySelector("#business-cards");
gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});





async function getBusinessList() {
    try {
        const response = await fetch("data/members.json");
        if (!response.ok) {
            throw new Error("Error fetching file");  
        }
        const data = await response.json();
        displayBusiness(data);
        console.log(data);
    } catch (error) {
        console.log("Error fetching data:", error);
    } 
}
getBusinessList();

const displayBusiness = (members) => {
    const businessCards = document.querySelector("#business-cards");
    businessCards.innerHTML = "";

    members.forEach((membercard) => {
        const card = document.createElement("div");
        card.classList.add("business-card");

        const logo = document.createElement("img");
        logo.src = membercard.image;
        logo.alt = `logo of ${membercard.name}`;
        logo.loading = "lazy";
        logo.width = "500";
        logo.height = "500";


        const address = document.createElement("p");
        address.textContent = membercard.address;

        const companyName = document.createElement("h2");
        companyName.textContent = membercard.name;
        companyName.classList.add("company-name");

        const phoneNumber = document.createElement("p");
        phoneNumber.textContent = membercard.phone;

        const website = document.createElement("a");
        website.href = membercard.website;
        website.textContent = membercard.website
        website.target = "_blank"

        card.appendChild(logo);
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(website);

        businessCards.appendChild(card);
        
    });
}


