function toggleMenu() {
    const sideMenu = document.querySelector('.side-menu');
    sideMenu.classList.toggle('show');
}

const navbarHamburger = document.querySelector('.navbar-hamburger');
navbarHamburger.addEventListener('click', toggleMenu);

// Close the side-menu when clicking outside of it
window.addEventListener('click', function(event) {
    const sideMenu = document.querySelector('.side-menu');
    if (!event.target.matches('.navbar-hamburger') && !event.target.closest('.side-menu') && sideMenu.classList.contains('show')) {
        sideMenu.classList.remove('show');
    }
});