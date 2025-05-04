import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDk-GkFo4oTJbMq8BweAZxukj5-sREiuPg",
    authDomain: "webtemariux.firebaseapp.com",
    projectId: "webtemariux",
    storageBucket: "webtemariux.firebasestorage.app",
    messagingSenderId: "994279376923",
    appId: "1:994279376923:web:68ef2427e69da252f190be"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

let usuarioRegistrado = false;
let usuarioEsPremium = false;

document.getElementById("iniciarSesion").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            mostrarBienvenida(user);
        })
        .catch((error) => {
            console.error("Error al iniciar sesión:", error);
        });
});

document.getElementById("cerrarSesion").addEventListener("click", () => {
    signOut(auth).then(() => {
        location.reload();
    });
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        mostrarBienvenida(user);
        usuarioRegistrado = true;
        const nombre = user.displayName || "Usuario";
        document.getElementById("bienvenida").innerHTML = `Hola, <strong>${nombre}</strong>`;
        document.getElementById("temarios-gratis").style.display = "block";
        if (usuarioEsPremium) {
            document.getElementById("temarios-premium").style.display = "block";
        }
    }
});

function mostrarBienvenida(usuario) {
    const nombre = usuario.displayName || "Usuario";
    const foto = usuario.photoURL;

    document.getElementById("bienvenida").innerHTML = `Hola, <strong>${nombre}</strong>`;
    
    document.getElementById("usuario-info").style.display = "block";
    document.getElementById("nombre-usuario").textContent = nombre;
    document.getElementById("foto-usuario").src = foto;
}


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
document.getElementById("mostrarPremium").addEventListener("click", function() {
    if (!usuarioRegistrado || !usuarioEsPremium) {
        document.getElementById("mensaje-premium").style.display = "block";
        return;
    }
document.getElementById("listaPremium").classList.toggle("oculto");
});
    
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