const btn = document.getElementById("btnTop");
btn.addEventListener("click", function () {
    window.scrollTo(0, 0);
});
document.addEventListener('scroll', ocultar);
function ocultar() {
    if (window.scrollY > 100) {
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }
}
ocultar();
