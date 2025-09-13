const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.querySelector("#currentyear").textContent = `© ${currentYear}`;
document.querySelector("#last-modified").textContent = `Last Modified ${lastModified}`;