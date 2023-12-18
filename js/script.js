const burgerMenu = document.querySelector('#burger');
const dropdown = document.querySelector('#drop');

burgerMenu.addEventListener('click', function() {
    if (window.getComputedStyle(dropdown).display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});