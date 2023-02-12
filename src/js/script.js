const burger = document.querySelector('.burger');
const header = document.querySelector('header');




window.burgerClick = (boolean) => {
    if (boolean == true) {
        burger.style.display = 'none';
    } else {
        burger.style.display = 'flex';
    }
}





document.addEventListener('scroll', () => {
    if (window.pageYOffset >= 100) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
})