document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("formMessage");
    if (!name || !email.includes("@")) {
        message.textContent = "Введите корректные имя и email";
        message.style.color = "red";
    } else {
        message.textContent = `Спасибо, ${name}! Мы с вами свяжемся.`;
        message.style.color = "green";
    }
});