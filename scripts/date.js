let copyrightYear = document.querySelector("#copyright-year");
const year = new Date().getFullYear();
copyrightYear.innerHTML = `&copy; ${year}`



let lastModified = document.querySelector("#last-modified");
let lastModifiedDate = new Date(document.lastModified).toLocaleString('en-US', {day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"});
lastModified.innerHTML = `Last Modification: ${lastModifiedDate}`