// define variables
let menu = document.getElementById('#menu-icon');
let navbar = document.getElementById('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

// scroll reveal 
const scrollReveal = ({
    distance: '40px',
    duration: '2500',
    reset: true,
})

scrollReveal.reveal('.logo', {delay: 20, origin: 'left'});