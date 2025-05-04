document.getElementById("mostrarPremium").addEventListener("click", () => {
    const lista = document.getElementById("listaPremium");
    lista.style.display = lista.style.display === "none" ? "block" : "none";
});
function mostrarHora() {
    const ahora = new Date();
    const horaTexto = ahora.toLocaleTimeString();
    document.getElementById("hora").textContent = "Hora actual: " + horaTexto;
}

mostrarHora();
setInterval(mostrarHora, 1000);
