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
    //Mostrar y ocultar los temas de las materias
function toggleSubtemas(id) {
    const element = document.getElementById("subtemas-" + id);
    if (element.classList.contains("oculto")) {
    element.classList.remove("oculto");
    element.classList.add("visible");
    } else {
    element.classList.remove("visible");
    element.classList.add("oculto");
    }
}



function mostrarTemarios() {
    if (usuarioRegistrado) {
    document.getElementById("temarios-gratis").style.display = "block";

    if (usuarioEsPremium) {
        document.getElementById("temarios-premium").style.display = "block";
        document.getElementById("mensaje-premium").style.display = "none";
    } else {
        document.getElementById("temarios-premium").style.display = "none";
        document.getElementById("mensaje-premium").style.display = "block";
    }
    }
}


  // Mostrar hora actual
function actualizarHora() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString();
    document.getElementById("hora").textContent = `Hora actual: ${hora}`;
}  
actualizarHora();
setInterval(actualizarHora, 1000);  