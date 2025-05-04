// Mostrar mensaje de bienvenida
window.addEventListener("DOMContentLoaded", () => {
    alert("¡Bienvenido a Temarios Personalizados!");
});

  // Mostrar/ocultar temarios premium
document.getElementById("mostrarPremium").addEventListener("click", () => {
    const lista = document.getElementById("listaPremium");
    lista.classList.toggle("oculto");
});

  // Mostrar hora actual
function actualizarHora() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString();
    document.getElementById("hora").textContent = `Hora actual: ${hora}`;
}  
actualizarHora();
setInterval(actualizarHora, 1000);  