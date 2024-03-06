const menuHamburgerInput = document.querySelector('.menu-hamburger input');
const menuHamburger = document.querySelector('.menu-hamburger');
const navBar = document.querySelector('.menu');

menuHamburgerInput.addEventListener('click', function () {
    navBar.classList.toggle('slide');
});

const btnToggle = document.querySelector('.toggle');
const iconToggle = document.querySelector('.btn_icon');
const decorationPort = document.querySelector('.decoration');

if (localStorage.getItem('Mode') == 'dark') {
    document.body.classList.add('dark');

    if (document.body.classList.contains('dark')) {
        iconToggle.classList.remove('fa-sun');
        iconToggle.classList.add('fa-moon');
    } else {
        iconToggle.classList.remove('fa-moon');
        iconToggle.classList.add('fa-sun');
    }

    navBar.classList.toggle('menu-active');
    navBar.classList.toggle('link-active');
    menuHamburger.classList.toggle('mt-active');
    btnToggle.classList.toggle('toggle-active');
    decorationPort.classList.toggle('decoration-active');
}

function toggleMode() {
    document.body.classList.toggle('dark');

    if (localStorage.getItem('Mode') == 'light' | localStorage.getItem('Mode') == null) {
        localStorage.setItem('Mode', 'dark');
    } else {
        localStorage.setItem('Mode', 'light');
    }

    if (document.body.classList.contains('dark')) {
        iconToggle.classList.remove('fa-sun');
        iconToggle.classList.add('fa-moon');
    } else {
        iconToggle.classList.remove('fa-moon');
        iconToggle.classList.add('fa-sun');
    }

    navBar.classList.toggle('menu-active');
    navBar.classList.toggle('link-active');
    menuHamburger.classList.toggle('mt-active');
    btnToggle.classList.toggle('toggle-active');
    decorationPort.classList.toggle('decoration-active');

}

const btnResume = document.querySelector('.resume');
btnResume.addEventListener('click', () => {
    btnResume.classList.add('download-active');
    setTimeout(() => {
        btnResume.classList.remove('download-active');
    }, 13000);
});