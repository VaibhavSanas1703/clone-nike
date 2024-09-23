
let menuIcon = document.querySelector('.icon-menu');
let navbar = document.querySelector('.navlinks ul');
let closeMenu = document.querySelector('ul img');

menuIcon.addEventListener('click',() => {
    navbar.classList.add('active')
})

closeMenu.addEventListener('click',() => {
    navbar.classList.remove('active')
})