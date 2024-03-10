
/* eslint-disable */

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menumob'),
    menuItem = document.querySelectorAll('.link'),
    hamburger = document.querySelector('.hamburger_wrap');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menumob_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menumob_active');
        })
    })
})