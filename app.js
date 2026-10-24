const fechaInicial = new Date().toISOString();

let personajes = [
    {
        id: "mononoke-001",
        nombre: "Kusuriuri — Espada Kon",
        rol: "Protagonista",
        imagen: "",
        descripcion: "Misterioso Boticario que porta la Espada Exorcista Kon.",
        descripcionDetallada: "El Boticario es un viajero misterioso que investiga fenómenos sobrenaturales relacionados con los Mononoke. Para exorcizarlos, debe descubrir su Forma, Verdad y Razón. Porta la Espada Exorcista Kon, una de las espadas especiales vinculadas al Yin-Yang Hakké.",
        fechaCreacion: fechaInicial
    },
    {
        id: "mononoke-002",
        nombre: "Shingi Kon",
        rol: "Protagonista",
        imagen: "",
        descripcion: "Forma de combate del Boticario que porta la Espada Kon.",
        descripcionDetallada: "Shingi Kon es la forma de combate que adopta el Boticario al liberar el poder de la Espada Exorcista Kon. Esta transformación le permite enfrentarse a los Mononoke y realizar el exorcismo una vez descubiertas su Forma, Verdad y Razón.",
        fechaCreacion: fechaInicial
    },
    {
        id: "mononoke-003",
        nombre: "Kusuriuri — Espada Ri",
        rol: "Protagonista",
        imagen: "",
        descripcion: "Boticario portador de la espada Ri, capaz de enfrentarse a numerosos Mononoke.",
        descripcionDetallada: "Este Boticario porta la Espada Exorcista Ri, distinta de la espada Kon. Se le atribuye haber derrotado a más de cien Mononoke y aparece para auxiliar al Boticario de Kon cuando la situación lo requiere.",
        fechaCreacion: fechaInicial
    },
    {
        id: "mononoke-004",
        nombre: "Shingi Ri",
        rol: "Protagonista",
        imagen: "",
        descripcion: "Forma de combate del Boticario que porta la Espada Ri.",
        descripcionDetallada: "Shingi Ri es la forma de combate asociada al Boticario de la Espada Ri. Su apariencia destaca por una vestimenta inicialmente blanca que adquiere un resplandor dorado conforme aumenta su poder durante el enfrentamiento.",
        fechaCreacion: fechaInicial
    },
    {
        id: "mononoke-005",
        nombre: "Asa",
        rol: "Aliado",
        imagen: "",
        descripcion: "Trabajadora del Ōoku encargada de la administración de documentos.",
        descripcionDetallada: "Asa es una de las protagonistas de Mononoke: Karakasa. Trabaja en el Ōoku como responsable de documentos oficiales. Por orden de Botan, investiga registros históricos relacionados con la creencia en Omizusama, lo que la involucra en los misterios que rodean al palacio.",
        fechaCreacion: fechaInicial
    },
    {
        id: "mononoke-006",
        nombre: "Suikōin",
        rol: "Antagonista",
        imagen: "",
        descripcion: "Madre del Tennō y figura influyente dentro del Ōoku.",
        descripcionDetallada: "Suikōin es la madre del Tennō y una figura de gran influencia en el Ōoku. Defiende las tradiciones, el linaje y las creencias que sostienen el orden del palacio. La intervención del Boticario representa una amenaza para ese orden y para la autoridad que busca preservar.",
        fechaCreacion: fechaInicial
    }
];

const descripcionesActualizadas = {
    "mononoke-001": {
        descripcion: "Misterioso Boticario que porta la Espada Exorcista Kon.",
        descripcionDetallada: "El Boticario es un viajero misterioso que investiga fenómenos sobrenaturales relacionados con los Mononoke. Para exorcizarlos, debe descubrir su Forma, Verdad y Razón. Porta la Espada Exorcista Kon, una de las espadas especiales vinculadas al Yin-Yang Hakké."
    },
    "mononoke-002": {
        descripcion: "Forma de combate del Boticario que porta la Espada Kon.",
        descripcionDetallada: "Shingi Kon es la forma de combate que adopta el Boticario al liberar el poder de la Espada Exorcista Kon. Esta transformación le permite enfrentarse a los Mononoke y realizar el exorcismo una vez descubiertas su Forma, Verdad y Razón."
    },
    "mononoke-003": {
        descripcion: "Boticario portador de la espada Ri, capaz de enfrentarse a numerosos Mononoke.",
        descripcionDetallada: "Este Boticario porta la Espada Exorcista Ri, distinta de la espada Kon. Se le atribuye haber derrotado a más de cien Mononoke y aparece para auxiliar al Boticario de Kon cuando la situación lo requiere."
    },
    "mononoke-004": {
        descripcion: "Forma de combate del Boticario que porta la Espada Ri.",
        descripcionDetallada: "Shingi Ri es la forma de combate asociada al Boticario de la Espada Ri. Su apariencia destaca por una vestimenta inicialmente blanca que adquiere un resplandor dorado conforme aumenta su poder durante el enfrentamiento."
    },
    "mononoke-005": {
        descripcion: "Trabajadora del Ōoku encargada de la administración de documentos.",
        descripcionDetallada: "Asa es una de las protagonistas de Mononoke: Karakasa. Trabaja en el Ōoku como responsable de documentos oficiales. Por orden de Botan, investiga registros históricos relacionados con la creencia en Omizusama, lo que la involucra en los misterios que rodean al palacio."
    },
    "mononoke-006": {
        descripcion: "Madre del Tennō y figura influyente dentro del Ōoku.",
        descripcionDetallada: "Suikōin es la madre del Tennō y una figura de gran influencia en el Ōoku. Defiende las tradiciones, el linaje y las creencias que sostienen el orden del palacio. La intervención del Boticario representa una amenaza para ese orden y para la autoridad que busca preservar."
    }
};

function actualizarDescripciones() {
    const personajesActualizados = personajes.map(personaje => {
        const actualizacion = descripcionesActualizadas[personaje.id];

        if (!actualizacion) {
            return personaje;
        }

        return {
            ...actualizacion,
            ...personaje
        };
    });

    personajes = personajesActualizados;
    guardarPersonajes();
}

let idPersonajeEditando = null;

function mostrarPersonajes(lista = personajes) {
    const contenedor = document.getElementById("personajes-container");
    const contador = document.getElementById("contador-personajes");

    contador.textContent = `${lista.length} ${
        lista.length === 1 ? "personaje" : "personajes"
    }`;

    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = `
            <div class="column is-12 has-text-centered">
                <p style="color: #F2F2F2;">
                    No se encontraron personajes.
                </p>
                <button class="button mt-3" id="limpiar-busqueda">
                    Limpiar búsqueda
                </button>
            </div>
        `;

        document.getElementById("limpiar-busqueda")
            .addEventListener("click", function () {
                document.getElementById("buscador-personajes").value = "";
                filtrarPersonajes();
            });

        return;
    }

    lista.forEach(function(personaje) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("column", "is-one-third");

        tarjeta.innerHTML = `
            <div class="card" style="background-color: #2F3159; color: #F2F2F2;">
                <div class="card-content">
                    <p class="title is-4" style="color: #F2F2F2;">
                        ${personaje.nombre}
                    </p>
                    <p class="subtitle is-6" style="color: #D93232;">
                        ${personaje.rol}
                    </p>
                    <p>${personaje.descripcion}</p>
                    <div class="buttons mt-4">
                        <button
                            class="button is-warning is-small"
                            onclick="editarPersonaje('${personaje.id}')">
                            Editar
                        </button>

                        <button
                            class="button is-info is-small"
                            onclick="verDetallesPersonaje('${personaje.id}')">
                            Ver detalles
                        </button>

                        <button
                            class="button is-danger is-small"
                            onclick="eliminarPersonaje('${personaje.id}')">
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        `;

        if (personaje.imagen) {
            const contenedorImagen = document.createElement("div");
            contenedorImagen.classList.add("card-image");

            const imagen = document.createElement("img");
            imagen.src = personaje.imagen;
            imagen.alt = personaje.nombre;
            imagen.loading = "lazy";

            contenedorImagen.appendChild(imagen);
            tarjeta.querySelector(".card").prepend(contenedorImagen);
        }

        contenedor.appendChild(tarjeta);
    });
}

function filtrarPersonajes() {
    const buscador = document.getElementById("buscador-personajes");

    const normalizar = texto => texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

    const busqueda = normalizar(buscador.value);
    const resultados = [];
    let i = 0;

    while (i < personajes.length) {
        const personaje = personajes[i];
        const nombre = normalizar(personaje.nombre);
        const rol = normalizar(personaje.rol);

        if (nombre.includes(busqueda) || rol.includes(busqueda)) {
            resultados.push(personaje);
        }

        i++;
    }

    mostrarPersonajes(resultados);
}

document.getElementById("buscador-personajes")
    .addEventListener("input", filtrarPersonajes);

const botonAgregar = document.getElementById("agregar-personaje");
const formulario = document.getElementById("formulario-personaje");
const botonCancelar = document.getElementById("cancelar-formulario");

botonAgregar.addEventListener("click", function () {
    idPersonajeEditando = null;
    formulario.reset();

    formulario.classList.remove("is-hidden");

    formulario.querySelector('[type="submit"]').textContent =
        "Guardar personaje";
});

botonCancelar.addEventListener("click", function () {
    idPersonajeEditando = null;
    formulario.reset();
    formulario.classList.add("is-hidden");

    formulario.querySelector('[type="submit"]').textContent =
        "Guardar personaje";
});

document.getElementById("cerrar-detalles")
    .addEventListener("click", cerrarDetallesPersonaje);

document.querySelector("#detalle-personaje .modal-background")
    .addEventListener("click", cerrarDetallesPersonaje);

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre-personaje").value.trim();
    const rol = document.getElementById("rol-personaje").value;
    const imagen = document.getElementById("imagen-personaje").value.trim();
    const descripcion = document.getElementById("descripcion-personaje").value.trim();
    const descripcionDetallada = document.getElementById("descripcion-detallada").value.trim();

    const normalizar = texto => texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

    if (nombre === "" || descripcion === "") {
        alert("Completa el nombre y la descripción.");
        return;
    }

    const nombreExiste = personajes.some(personaje =>
        personaje.id !== idPersonajeEditando &&
        normalizar(personaje.nombre) === normalizar(nombre)
    );

    if (nombreExiste) {
        alert("Ya existe un personaje con ese nombre.");
        return;
    }

    if (idPersonajeEditando !== null) {
        const indice = personajes.findIndex(
            personaje => personaje.id === idPersonajeEditando
        );

        if (indice === -1) {
            alert("No se encontró el personaje que deseas editar.");
            return;
        }

        personajes[indice].nombre = nombre;
        personajes[indice].rol = rol;
        personajes[indice].imagen = imagen;
        personajes[indice].descripcion = descripcion;
        personajes[indice].descripcionDetallada = descripcionDetallada;

        alert("Personaje actualizado correctamente.");

    } else {
        const nuevoPersonaje = {
            id: `mononoke-${Date.now()}`,
            nombre: nombre,
            rol: rol,
            imagen: imagen,
            descripcion: descripcion,
            descripcionDetallada: descripcionDetallada,
            fechaCreacion: new Date().toISOString()
        };

        personajes.push(nuevoPersonaje);

        alert("Personaje agregado correctamente.");
    }

    guardarPersonajes();
    idPersonajeEditando = null;
    formulario.reset();
    formulario.classList.add("is-hidden");

    formulario.querySelector('[type="submit"]').textContent =
        "Guardar personaje";

    document.getElementById("buscador-personajes").value = "";

    mostrarPersonajes(personajes);
});

function verDetallesPersonaje(id) {
    const personaje = personajes.find(function (personaje) {
        return personaje.id === id;
    });

    const modal = document.getElementById("detalle-personaje");
    const contenido = document.getElementById("contenido-detalle");
    const titulo = document.getElementById("titulo-detalle");

    if (!personaje) {
        alert("No se encontró el personaje.");
        return;
    }

    titulo.textContent = personaje.nombre;
    contenido.innerHTML = "";

    const distribucion = document.createElement("div");
    distribucion.classList.add("columns", "is-vcentered");

    const columnaImagen = document.createElement("div");
    columnaImagen.classList.add("column", "is-5");

    const columnaDescripcion = document.createElement("div");
    columnaDescripcion.classList.add("column", "is-7");

    if (personaje.imagen) {
        const imagen = document.createElement("img");
        imagen.src = personaje.imagen;
        imagen.alt = personaje.nombre;
        imagen.style.width = "100%";
        imagen.style.height = "auto";
        imagen.style.maxHeight = "65vh";
        imagen.style.objectFit = "contain";

        columnaImagen.appendChild(imagen);
    } else {
        columnaImagen.textContent = "Este personaje no tiene una imagen disponible.";
    }

    const rol = document.createElement("p");
    rol.classList.add("subtitle", "is-5");
    rol.style.color = "#D93232";
    rol.textContent = personaje.rol;

    const descripcion = document.createElement("p");
    descripcion.textContent =
        personaje.descripcionDetallada || personaje.descripcion;

    columnaDescripcion.appendChild(rol);
    columnaDescripcion.appendChild(descripcion);

    distribucion.appendChild(columnaImagen);
    distribucion.appendChild(columnaDescripcion);
    contenido.appendChild(distribucion);

    modal.classList.add("is-active");
}

function cerrarDetallesPersonaje() {
    document.getElementById("detalle-personaje")
        .classList.remove("is-active");
}

function editarPersonaje(id) {
    const personaje = personajes.find(personaje => personaje.id === id);

    if (!personaje) {
        alert("No se encontró el personaje.");
        return;
    }

    idPersonajeEditando = id;

    document.getElementById("nombre-personaje").value = personaje.nombre;
    document.getElementById("rol-personaje").value = personaje.rol;
    document.getElementById("imagen-personaje").value = personaje.imagen;
    document.getElementById("descripcion-personaje").value = personaje.descripcion;
    document.getElementById("descripcion-detallada").value = personaje.descripcionDetallada || "";

    formulario.classList.remove("is-hidden");

    formulario.querySelector('[type="submit"]').textContent =
        "Guardar cambios";

    formulario.scrollIntoView({ behavior: "smooth", block: "center" });
}

function eliminarPersonaje(id) {
    const personaje = personajes.find(personaje => personaje.id === id);

    if (!personaje) {
        alert("No se encontró el personaje.");
        return;
    }

    const confirmar = confirm(
        `¿Seguro que deseas eliminar a "${personaje.nombre}"?`
    );

    if (!confirmar) {
        return;
    }

    personajes = personajes.filter(personaje => personaje.id !== id);
    guardarPersonajes();

    mostrarPersonajes(filtrarPorBusqueda());

    alert("Personaje eliminado correctamente.");
}

function filtrarPorBusqueda() {
    const buscador = document.getElementById("buscador-personajes");

    const normalizar = texto => texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

    const busqueda = normalizar(buscador.value);

    return personajes.filter(personaje =>
        normalizar(personaje.nombre).includes(busqueda) ||
        normalizar(personaje.rol).includes(busqueda)
    );
}

function guardarPersonajes() {
    localStorage.setItem("mononokePersonajes", JSON.stringify(personajes));
}

function cargarPersonajes() {
    try {
        const datosGuardados = localStorage.getItem("mononokePersonajes");

        if (datosGuardados === null) {
            guardarPersonajes();
            mostrarPersonajes();
            return;
        }

        const personajesGuardados = JSON.parse(datosGuardados);

        if (!Array.isArray(personajesGuardados)) {
            throw new Error("Los datos guardados no son un arreglo.");
        }

        personajes = personajesGuardados;
        mostrarPersonajes();

    } catch (error) {
        alert("Los datos guardados están dañados. Se cargarán los personajes de ejemplo.");
        localStorage.removeItem("mononokePersonajes");
        guardarPersonajes();
        mostrarPersonajes();
    }
}

cargarPersonajes();
actualizarDescripciones();
mostrarPersonajes(filtrarPorBusqueda());