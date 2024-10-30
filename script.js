let index = 0;
const images = document.querySelectorAll(".carousel-img");
let interval;

const colors = [
    "#000000", "#0d001a", "#000033", "#1a0033", "#330066",
    "#000066", "#4b0082", "#3a0066", "#29004d", "#1c1c72",
    "#190033", "#660099", "#0000cc", "#9900cc", "#1a1aff",
    "#7d3cff", "#b19cd9", "#d1b3ff", "#b3b3ff", "#e6ccff"
];
let currentIndex = 0;

// Cambio automático de fondo de color cada 2 segundos
setInterval(() => {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}, 2000);

// Función para cambiar la imagen
function changeImage(step) {
    images[index].classList.remove("active");
    index = (index + step + images.length) % images.length;
    images[index].classList.add("active");
}

// Cambio automático de imagen cada 3 segundos
function autoChangeImage() {
    interval = setInterval(() => changeImage(1), 3000);
}

// Cambio manual de imagen con reinicio del intervalo automático
function manualChangeImage(step) {
    clearInterval(interval);
    changeImage(step);
    autoChangeImage();
}

// Iniciar el carrusel automático
autoChangeImage();

document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");

    // Asegúrate de que el botón exista en el documento
    if (loginBtn) {
        console.log("Botón de inicio de sesión encontrado."); // Verifica si el botón es encontrado
        loginBtn.addEventListener("click", function () {
            // Capturar valores de los campos
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Verificar que se capturen los valores
            if (username && password) {
                console.log("Usuario y contraseña capturados."); // Verificar valores

                // Guardar los datos en localStorage
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);

                // Mostrar anuncio con los datos ingresados
                alert(`Datos ingresados:\nUsuario: ${username}\nContraseña: ${password}`);

                // Redirigir a index.html después de 5 segundos
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 5000);
            } else {
                alert("Por favor, completa ambos campos.");
            }
        });
    } else {
        console.error("El botón de inicio de sesión no se encontró."); // Error si no se encuentra el botón
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("registerBtn");

    // Asegúrate de que el botón exista en el documento
    if (registerBtn) {
        console.log("Botón de registro encontrado."); // Verifica si el botón es encontrado
        registerBtn.addEventListener("click", function () {
            // Capturar valores de los campos
            const fullName = document.getElementById("fullName").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Verificar que se capturen los valores
            if (fullName && email && password) {
                console.log("Datos capturados."); // Verifica si los datos fueron capturados

                // Guardar los datos en localStorage (opcional)
                localStorage.setItem("fullName", fullName);
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);

                // Mostrar anuncio con los datos ingresados
                alert(`Datos ingresados:\nNombre: ${fullName}\nCorreo: ${email}\nContraseña: ${password}`);

                // Redirigir a index.html después de 5 segundos
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 5000);
            } else {
                alert("Por favor, completa todos los campos.");
            }
        });
    } else {
        console.error("El botón de registro no se encontró."); // Error si no se encuentra el botón
    }
});