const params = new URLSearchParams(window.location.search);

document.querySelector("#name").textContent = params.get("name")
document.querySelector("#email").textContent = params.get("email")
document.querySelector("#phone").textContent = params.get("phone")
document.querySelector("#subject").textContent = params.get("subject")
document.querySelector("#message").textContent = params.get("message")


