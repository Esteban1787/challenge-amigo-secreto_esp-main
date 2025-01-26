// Arreglo vacío para guardar los nombres, [] indica tipo de array
let listaDeAmigos = [];

// Función para agregar nombres a la lista, const mantiene valor, get para llamar el Id
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value;

    // Validar que el nombre no esté vacío, === igual en valor y dato, || or
    if (nombre === "" || nombre === null || nombre === undefined) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al arreglo
    listaDeAmigos.push(nombre);
    mostrarLista();
    input.value = ""; // Limpiar el campo de entrada
}

// Mostrar la lista de nombres
function mostrarLista() {
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpiar la lista antes de mostrar

    // Arreglo con un bucle for 
    for (let i = 0; i < listaDeAmigos.length; i++) {
        const amigo = listaDeAmigos[i];
        const item = document.createElement("li"); // Crear un elemento <li>
        item.textContent = amigo; // Asignar el nombre al contenido del <li>
        listaHTML.appendChild(item); // Agregar el <li> a la lista (sin usar appendChild)
    }
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSeleccionado = listaDeAmigos[indiceAleatorio];


    // Mostrar el resultado
    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;

    // Limpiar la lista de amigos después del sorteo
    listaDeAmigos = [];
    mostrarLista(); // Actualizar la lista visual en el HTML
}


