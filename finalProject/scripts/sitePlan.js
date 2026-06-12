const openClose = document.querySelectorAll(".openClose")



openClose.forEach((openCloseButton) => {
    openCloseButton.addEventListener("click", () => {
        const content = openCloseButton.nextElementSibling;
        content.classList.toggle("show")
    })

})