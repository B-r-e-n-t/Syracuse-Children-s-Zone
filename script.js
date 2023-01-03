const hamburgerButton = document.getElementById('hamburger-button');
const navBarLinks = document.getElementById('navbar-links');

hamburgerButton.addEventListener('click', () => {
    console.log('butt')
    navBarLinks.classList.toggle('active')
})
