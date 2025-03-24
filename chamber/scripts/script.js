const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateMe');

hamburgerElement.addEventListener('click', () =>{
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})



async function getMemberData(path) {
    const response = await fetch(path);
    const data = await response.json();
    console.log(data);

    if (Array.isArray(data)) {
        displayMembers(data); // Pass the data to displayMembers
    }
}

// Call the function with the path to your JSON file
// Fetch member data and display it
async function getMemberData(path) {
    const response = await fetch(path); // Fetch data from the provided path
    const data = await response.json(); // Parse the fetched data as JSON
    console.log(data); // Log the data to the console

    if (Array.isArray(data)) {
        displayMembers(data); // Pass the data to displayMembers
    }
}

// Call the function with the path to your JSON file
getMemberData('./data/members.json');

// Function to display members
const displayMembers = (members) => {
    const cards = document.getElementById('cards'); // Parent container for all cards

    members.forEach((member) => {
        // Create a new card for each member
        const card = document.createElement('section');

        // Create and populate elements
        const companyName = document.createElement('h2');
        companyName.textContent = member.name;

        const addresses = document.createElement('p');
        addresses.textContent = `Address: ${member.address}`;

        const phoneNumber = document.createElement('p');
        phoneNumber.textContent = `Phone: ${member.phoneNumber}`;

        const companyUrl = document.createElement('a');
        companyUrl.href = member.websiteURL;
        companyUrl.target = '_blank';
        companyUrl.classList.add('member-website');
        companyUrl.textContent = ` ${member.websiteURL}`;

       
        const logo = document.createElement('img');
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '400');
        logo.setAttribute('loading', 'lazy');

        
        card.appendChild(logo);
        card.appendChild(companyName);
        card.appendChild(addresses);
        card.appendChild(phoneNumber);
        card.appendChild(companyUrl);


        cards.appendChild(card);
    });
};


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
