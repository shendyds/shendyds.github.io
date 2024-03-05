const btnToggle = document.querySelector('.toggle');
const linkMenu = document.querySelector('.menu');
const iconToggle = document.querySelector('.btn_icon');
const decorationPort = document.querySelector('.decoration');

if (localStorage.getItem("Mode") == "dark") {
    document.body.classList.add("dark");

    if (document.body.classList.contains("dark")) {
        iconToggle.classList.remove('fa-sun');
        iconToggle.classList.add('fa-moon');
    } else {
        iconToggle.classList.remove('fa-moon');
        iconToggle.classList.add('fa-sun');
    }

    btnToggle.classList.toggle('toggle-active');
    linkMenu.classList.toggle('link-active');
    decorationPort.classList.toggle('decoration-active');
}

function toggleMode() {
    document.body.classList.toggle("dark");

    if (localStorage.getItem("Mode") == "light" | localStorage.getItem("Mode") == null) {
        localStorage.setItem("Mode", "dark");
    } else {
        localStorage.setItem("Mode", "light");
    }

    if (document.body.classList.contains("dark")) {
        iconToggle.classList.remove('fa-sun');
        iconToggle.classList.add('fa-moon');
    } else {
        iconToggle.classList.remove('fa-moon');
        iconToggle.classList.add('fa-sun');
    }

    btnToggle.classList.toggle('toggle-active');
    linkMenu.classList.toggle('link-active');
    decorationPort.classList.toggle('decoration-active');

}