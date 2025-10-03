import { getReason } from "./reason.mjs";
document.addEventListener("DOMContentLoaded", ()=>{
    getReason();

})

const navMenu = document.querySelector("#navMenu");
const navToggle = document.querySelector("#navToggle");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("active");
});

