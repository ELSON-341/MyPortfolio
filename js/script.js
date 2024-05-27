const button = document.querySelector('.hamburger')
console.log(button);

button.addEventListener('click', () =>{
    button.classList.toggle('is-active')
})