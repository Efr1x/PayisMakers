// Leer el parámetro de la URL (por ejemplo: ?id=sala)
const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "montana";

// Ruta completa a la imagen según el ID
const ruta = `assets/fotos360/${id}.jpg`;

// Seleccionar el elemento <a-sky> de A-Frame
const sky = document.getElementById("sky360");

// Establecer la imagen como fondo 360
sky.setAttribute("src", ruta);

// Verificación opcional: log en consola
console.log(`Cargando imagen 360: ${ruta}`);