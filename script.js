const imgOptions = document.querySelectorAll('.img-options img');
const mainImg = document.querySelector('.main-img img');
let root = document.querySelector(':root');

imgOptions.forEach(img => {
    img.addEventListener('click', () => {
        let src = img.getAttribute('src');
        let color = img.getAttribute('data-color');
        mainImg.src = src;
        changeColor(color);
    });
});

function changeColor(color) {
    let primaryColor;
    if (color === 'blue') {
        primaryColor = 211;
    } else if (color === 'red') {
        primaryColor = 0;
    } else if (color === 'green') {
        primaryColor = 84;
    } else {
        primaryColor = 26;
    }
    root.style.setProperty('--primary-color-hue', primaryColor);
}

//!=========== Toggle Menu ===========
let toggleMenu = document.querySelector('.toggle-menu');
let closeMenu = document.querySelector('.close-menu');
let navList = document.querySelector('.nav__list');

toggleMenu.addEventListener('click', () => {
    navList.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    navList.classList.remove('show');
});