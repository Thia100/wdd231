const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

const rawTimestamp = myInfo.get('timestamp');
const formattedDate = new Date(rawTimestamp).toLocaleDateString('en-US');
const formattedTime = new Date(rawTimestamp).toLocaleTimeString('en-US');



const results = document.querySelector('#results');
results.innerHTML = `<h2>Representative's Information</h2>  <p>First Name: ${myInfo.get('fname')}</p>  <p>Last Name: ${myInfo.get('lname')}</p>
<p>Email: ${myInfo.get('email')}</p>  <p>${myInfo.get('phonenumber')}</p>  <p>Role in Organization: ${myInfo.get('orgtitle')}</p>

<h2>Organization Information</h2>  <p>Business Name: ${myInfo.get('org-name')}</p>  <p>Membership Level: ${myInfo.get('membership')}</p>
<p>Organization Description: ${myInfo.get('org-description')}</p>  <p>Date & Time Submitted: ${formattedDate} ${formattedTime}</p>`;




