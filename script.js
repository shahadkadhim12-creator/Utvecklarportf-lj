// Hamburger
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("nav-menu");
toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
});

// Formvalidering
const form = document.getElementById("contact-form");
form.addEventListener("submit", function(e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!name || !email || !message) {
        alert("Alla fält måste fyllas i!");
        e.preventDefault();
        return;
    }
    
    if (!emailRegex.test(email)) {
        alert("Ange en giltig e-postadress!");
        e.preventDefault();
    }
});