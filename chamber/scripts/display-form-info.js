const params = new URLSearchParams(window.location.search);

document.querySelector("#firstName").textContent = params.get("firstName")
document.querySelector("#lastName").textContent = params.get("lastName")
document.querySelector("#emailAddress").textContent = params.get("emailAddress")
document.querySelector("#phoneNumber").textContent = params.get("phoneNumber")
document.querySelector("#organizationName").textContent = params.get("organizationName")
document.querySelector("#timestamp").textContent = params.get("timestamp")
document.querySelector("#timestamp").textContent = params.get("timestamp");
