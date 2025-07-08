const toggleBtn = document.getElementById("toggle-btn");
const icon = document.getElementById("toggle-icon")
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle("darkmode");
    body.classList.toggle("lightmode");

    if (body.classList.contains("darkmode")) {
        icon.src="icons/moon.svg"
    } else {
        icon.src="icons/sun.svg"
    }
});