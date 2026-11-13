document.addEventListener("DOMContentLoaded", () => {
    const servicios = [
        { nombre: "Consulta General", descripcion: "Revisiones médicas completas para perros y gatos." },
        { nombre: "Vacunación y Desparasitación", descripcion: "Mantén al día el carnet de salud de tu mascota." },
        { nombre: "Baño y Peluquería", descripcion: "Estética profesional adaptada a cada raza." }
    ];

    const contenedor = document.getElementById("contenedor-servicios");

    servicios.forEach(s => {
        const div = document.createElement("div");
        div.classList.add("tarjeta-servicio");
        div.innerHTML = `<h3>${s.nombre}</h3><p>${s.descripcion}</p>`;
        contenedor.appendChild(div);
    });
});