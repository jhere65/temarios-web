
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Esperar a que se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const usuarioInfo = document.getElementById('usuario-info');
    const fotoUsuario = document.getElementById('foto-usuario');
    const nombreUsuario = document.getElementById('nombre-usuario');
    const botonCerrarSesion = document.getElementById('cerrar-sesion');
    const botonesMostrar = document.querySelectorAll('.mostrar');
    const secciones = document.querySelectorAll('.seccion');

  // Configurar Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyDk-GkFo4oTJbMq8BweAZxukj5-sREiuPg",
        authDomain: "webtemariux.firebaseapp.com",
        projectId: "webtemariux",
        storageBucket: "webtemariux.firebasestorage.app",
        messagingSenderId: "994279376923",
        appId: "1:994279376923:web:68ef2427e69da252f190be",
        measurementId: "G-KG8F6VGWQK"
    };

    // Inicializar Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // Iniciar sesión con Google
    window.iniciarSesion = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).catch(error => {
        console.error('Error al iniciar sesión:', error.message);
        });
    };

    // Cerrar sesión
    botonCerrarSesion?.addEventListener('click', () => {
        auth.signOut().catch(error => {
        console.error('Error al cerrar sesión:', error.message);
        });
    });

    // Mostrar u ocultar usuario al cambiar el estado de autenticación
    auth.onAuthStateChanged(user => {
        if (user) {
        fotoUsuario.src = user.photoURL;
        nombreUsuario.textContent = user.displayName;
        usuarioInfo.style.display = 'flex';
        } else {
        usuarioInfo.style.display = 'none';
        }
    });

    // Mostrar y ocultar secciones según el botón clicado
    botonesMostrar.forEach(boton => {
        boton.addEventListener('click', () => {
        const seccionId = boton.getAttribute('data-seccion');
        const seccion = document.getElementById(seccionId);

        if (seccion) {
            const estaVisible = seccion.classList.contains('visible');

            // Ocultar todas las secciones
            secciones.forEach(sec => {
            sec.classList.remove('visible');
            sec.classList.add('oculto');
            });

            // Mostrar o volver a ocultar la seleccionada
            if (!estaVisible) {
            seccion.classList.remove('oculto');
            seccion.classList.add('visible');
            }
        }
        });
    });
function mostrarUsuario(nombre, fotoURL) {
    document.getElementById("nombre-usuario").textContent = nombre;
    document.getElementById("foto-usuario").src = fotoURL;
    document.getElementById("usuario-info").style.display = "flex";
    document.getElementById("iniciar-sesion").style.display = "none";
}

function ocultarUsuario() {
    document.getElementById("usuario-info").style.display = "none";
    document.getElementById("iniciar-sesion").style.display = "inline-block";
}

  // Mostrar hora actual
function actualizarHora() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString();
    document.getElementById("hora").textContent = `Hora actual: ${hora}`;
}  
actualizarHora();
setInterval(actualizarHora, 1000);
});