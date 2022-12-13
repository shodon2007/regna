const burger = document.querySelector('.burger');
function burgerClick(boolean) {
    if (boolean == true) {
        burger.style.display = 'none';
    } else {
        burger.style.display = 'flex';
    }
}