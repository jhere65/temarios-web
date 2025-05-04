// Mostrar mensaje de bienvenida
window.addEventListener("DOMContentLoaded", () => {
    alert("¡Bienvenido a Temarios Personalizados!");
});

document.getElementById("recomendar").addEventListener("click", () => {
    const edad = parseInt(document.getElementById("edad").value);
    const resultado = document.getElementById("recomendacion");

    if (!edad || edad < 5) {
    resultado.textContent = "Por favor, ingresa una edad válida.";
    return;
    }

    if (edad <= 11) {
    resultado.textContent = "Recomendado: Nivel primaria.";
    } else if (edad <= 16) {
    resultado.textContent = "Recomendado: Nivel secundaria.";
    } else {
    resultado.textContent = "Recomendado: Nivel avanzado o preuniversitario.";
    }
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