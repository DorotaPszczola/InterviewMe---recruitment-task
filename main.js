const $hamburger = document.querySelector(".hamburger");
const $mobileMenu = document.querySelector('.menu-hamburger');

const activateHamburger = () => {
    $hamburger.classList.toggle('hamburger-active');
    $mobileMenu.classList.toggle('menu-hamburger-active');
};
// const showMobileMenu = () => {
// }

$hamburger.addEventListener('click', activateHamburger);


// contact form //

