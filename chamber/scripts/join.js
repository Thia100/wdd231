const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateMe');

hamburgerElement.addEventListener('click', () =>{
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;


// Set form timestamp
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-timestamp').value = new Date().toISOString();
});


const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('#dialogBox div');


openButton1.addEventListener('click', () =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = '';

    const card = document.createElement('section');
    const membershipType = document.createElement('h4'); 
    membershipType.textContent = `NP Membership Benefits`;

   const benefit1 = document.createElement('p');
   benefit1.textContent = `✓ Zero costs`;
   const benefit2 = document.createElement('p');
   benefit2.textContent = `✓ Access to member-only newsletters`;
   const benefit3 = document.createElement('p');
   benefit3.textContent = `✓ Basic event announcements`;
   const benefit4 = document.createElement('p');
   benefit4.textContent = `✓ Annual non-profit networking event`;

    card.appendChild(membershipType);
    card.appendChild(benefit1);
    card.appendChild(benefit2);
    card.appendChild(benefit3);
    card.appendChild(benefit4);
    dialogBoxText.appendChild(card); 
});


openButton2.addEventListener('click', () =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = '';

    const card = document.createElement('section');
    const membershipType = document.createElement('h4'); 
    membershipType.textContent = `Bronze Membership Benefits`;

   const benefit1 = document.createElement('p');
   benefit1.textContent = `✓ 10% discount on chamber events`;
   const benefit2 = document.createElement('p');
   benefit2.textContent = `✓ Business training workshops (2/year)`;
   const benefit3 = document.createElement('p');
   benefit3.textContent = `✓ Member-to-member discounts`;
   const benefit4 = document.createElement('p');
   benefit4.textContent = `✓ Social media shoutouts`;
   const benefit5 = document.createElement('p');
   benefit5.textContent = `✓ Access to business resources`;

    card.appendChild(membershipType);
    card.appendChild(benefit1);
    card.appendChild(benefit2);
    card.appendChild(benefit3);
    card.appendChild(benefit4);
    card.appendChild(benefit5);
    dialogBoxText.appendChild(card); 

});
openButton3.addEventListener('click', () =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = '';

    const card = document.createElement('section');
    const membershipType = document.createElement('h4'); 
    membershipType.textContent = `Silver Membership Benefits`;

   const benefit1 = document.createElement('p');
   benefit1.textContent = `✓ 20% discount on chamber events`;
   const benefit2 = document.createElement('p');
   benefit2.textContent = `✓ Priority event registration`;
   const benefit3 = document.createElement('p');
   benefit3.textContent = `✓ Monthly training workshops`;
   const benefit4 = document.createElement('p');
   benefit4.textContent = `✓ Featured in member spotlight (quarterly)`;
   const benefit5 = document.createElement('p');
   benefit5.textContent = `✓ Business mentoring program`;
   const benefit6 = document.createElement('p');
   benefit6.textContent = `✓ Access to premium market research`;

    card.appendChild(membershipType);
    card.appendChild(benefit1);
    card.appendChild(benefit2);
    card.appendChild(benefit3);
    card.appendChild(benefit4);
    card.appendChild(benefit5);
    dialogBoxText.appendChild(card); 
});
openButton4.addEventListener('click', () =>{
    dialogBox.showModal();

    dialogBoxText.innerHTML = '';

    const card = document.createElement('section');
    const membershipType = document.createElement('h4'); 
    membershipType.textContent = `Gold Membership Benefits`;

   const benefit1 = document.createElement('p');
   benefit1.textContent = `✓ 30% discount on chamber events`;
   const benefit2 = document.createElement('p');
   benefit2.textContent = `✓ VIP access to annual gala`;
   const benefit3 = document.createElement('p');
   benefit3.textContent = `✓ Homepage featured placement (monthly)`;
   const benefit4 = document.createElement('p');
   benefit4.textContent = `✓ Dedicated business consultant`;
   const benefit5 = document.createElement('p');
   benefit5.textContent = `✓ Exclusive networking events`;
   const benefit6 = document.createElement('p');
   benefit6.textContent = `✓ Keynote speaking opportunities`;
   const benefit7 = document.createElement('p');
   benefit7.textContent = `✓ Annual business health check`;

    card.appendChild(membershipType);
    card.appendChild(benefit1);
    card.appendChild(benefit2);
    card.appendChild(benefit3);
    card.appendChild(benefit4);
    card.appendChild(benefit5);
    dialogBoxText.appendChild(card); 
});
closeButton.addEventListener('click', () =>{
    dialogBox.close();
});




