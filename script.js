/* เพิ่มการจัดการกดเมนูไอคอนฮัมเบอร์เกอร์ */
const navbarToggle = document.querySelector('.navbar-toggle');
navbarToggle.addEventListener('click', function () {
    navbarToggle.classList.toggle('active');
});

/* เปลี่ยนหน้า Page*/
function changePage0() {
    window.location.href = "./index.html";
}

function changePage1() {
    window.location.href = "./router.html";
}

function changePage2() {
    window.location.href = "./switch.html";
}

function changePage3() {
    window.location.href = "./Lab_PlayGround.html";
}

/* show text*/
var previousTextId = null;

function showText(textId) {
    var currentTextElement = document.getElementById("displayText" + textId);
    if (previousTextId !== null) {
        var previousTextElement = document.getElementById("displayText" + previousTextId);
        previousTextElement.style.display = "none";
    }
    currentTextElement.style.display = "block";
    previousTextId = textId;
}
