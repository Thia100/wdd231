const toggle = document.querySelector("#nav-toggle");
const menu = document.querySelector("#nav-menu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
});

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
document.querySelector("#currentyear").textContent = `© ${currentYear}`;
document.querySelector(
  "#last-modified"
).textContent = `Last Modified ${lastModified}`;

const getString = window.location.search;
const myInfo = new URLSearchParams(getString);
document.querySelector("#results").innerHTML = `
<p>First Name: ${myInfo.get("firstName")}</p>
<p>Last Name: ${myInfo.get("lastName")}</p>
<p>Email Address: ${myInfo.get("emailAddress")}</p>
<p>Phone Number: ${myInfo.get("phoneNumber")}</p>
<p>Organization Name: ${myInfo.get("organizationName")}</p>
<p><strong>Date Submitted:</strong> ${myInfo.get("timestamp")}</p>`;

document.querySelector("#currentyear").textContent = `© ${currentYear}`;
document.querySelector(
  "#last-modified"
).textContent = `Last Modified ${lastModified}`;
