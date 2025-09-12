const currentYear = new Date().getFullYear();
const lastModifiedDate = document.lastModified;
document.getElementById('currentyear').textContent = `© ${currentYear}`;
document.getElementById('last-modified').textContent = `Last modified: ${lastModifiedDate}`;