"use strict"


const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', () => {
    toggleMenu();
    menuBtn.classList.toggle('active');
});


function toggleMenu() {
    const menu = document.getElementById('side-menu-nav');
    const menuDisp = getComputedStyle(menu).display;

    if(menuDisp === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}