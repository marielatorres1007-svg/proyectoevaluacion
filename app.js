
const fechaInicial = new Date().toISOString();

let personajes = [
    {
        id: "mononoke-001",
        nombre: "Kusuriuri — Espada Kon",
        rol: "Protagonista",
        imagen: "",
        descripcion: "Misterioso Boticario que porta la Espada Exorcista Kon. Investiga las manifestaciones sobrenaturales, busca comprender las emociones que originan a los Mononoke y los purifica cuando descubre su Forma, Verdad y Razón.",
        fechaCreacion: fechaInicial
    },
    {
        id: "mononoke-002",
        nombre: "Shingi Kon",
        rol: "Protagonista",
        imagen: "",
        descripcion: "Forma de combate que adopta el Boticario de la espada Kon al desbloquear el poder de la Espada Exorcista. Es la forma que le permite cortar, purificar y apaciguar a los Mononoke.",
        fechaCreacion: fechaInicial
    },
    {
        id: "mononoke-003",
        nombre: "Kusuriuri — Espada Ri",
        rol: "Protagonista",
        imagen: "",
        descripcion: "Boticario portador de la espada Ri, una de las ocho espadas especiales del Yin-Yang Hakké. Ha derrotado a más de cien Mononoke y acude en auxilio del Boticario de la espada Kon.",
        fechaCreacion: fechaInicial
    },
    {
        id: "mononoke-004",
        nombre: "Shingi Ri",
        rol: "Protagonista",
        imagen: "",
        descripcion: "Forma de combate que adopta el Boticario de la espada Ri para exorcizar Mononoke. Su vestimenta comienza siendo blanca y se vuelve dorada a medida que se llena de poder.",
        fechaCreacion: fechaInicial
    },
    {
        id: "mononoke-005",
        nombre: "Asa",
        rol: "Aliado",
        imagen: "",
        descripcion: "Una de las protagonistas de la primera película. Trabaja en la administración de documentos del Ōoku y busca información sobre la creencia en Mizukami por orden de Botan.",
        fechaCreacion: fechaInicial
    },
    {
        id: "mononoke-006",
        nombre: "Suikōin",
        rol: "Antagonista",
        imagen: "",
        descripcion: "Madre del Tennō y figura de gran influencia en el Ōoku. Defiende las tradiciones y el linaje, y considera molesta la intervención del Boticario en el Ōoku.",
        fechaCreacion: fechaInicial
    }
];

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


formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre-personaje").value.trim();
    const rol = document.getElementById("rol-personaje").value;
    const imagen = document.getElementById("imagen-personaje").value.trim();
    const descripcion = document.getElementById("descripcion-personaje").value.trim();

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

        alert("Personaje actualizado correctamente.");

    } else {
        const nuevoPersonaje = {
            id: `mononoke-${Date.now()}`,
            nombre: nombre,
            rol: rol,
            imagen: imagen,
            descripcion: descripcion,
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