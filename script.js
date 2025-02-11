document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const themeBtn = document.getElementById("theme-toggle");

    // Menú hamburguesa
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Modo oscuro
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            themeBtn.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });

    // Cargar tema guardado
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.textContent = "☀️";
    }
});
