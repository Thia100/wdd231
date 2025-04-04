const OpenButton = document.querySelector('#OpenButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton =  document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('#dialogBox div');

// to open the dialog box, we add an event listener
OpenButton1.addEventListener('click', () =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One apple containes 95 calories`;
})
OpenButton2.addEventListener('click', () =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One apple containes 95 calories`;
})
OpenButton3.addEventListener('click', () =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One apple containes 95 calories`;
})

// to close the dialog box
closeButton.addEventListener('click', ()=> {
    dialogBox.close();
})

// to create a reusable dailog box you need;
// 1. 3 html buttons
// 2. 1 html dialog element(to be reused)
// 3. 1 close button
// 4. 4 query selectors
// 5. 4 event listeners