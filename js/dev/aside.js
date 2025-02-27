const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");

function toggleMenu() {
    sideMenu.classList.toggle("open");
    menuToggle.querySelector('i').classList.toggle('bi-x-lg');
    menuToggle.querySelector('i').classList.toggle('bi-list');
}

menuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
});

document.addEventListener("click", (e) => {
    if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        sideMenu.classList.remove("open");
        menuToggle.classList.remove("open");
    }
});
