// Función para guardar los datos ingresados en el formulario en el localStorage
function guardarDatos() {
  // Obtener los valores de los inputs
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;

  // Crear un objeto con los datos
  const datos = { nombre, apellido, edad };

  // Obtener los datos guardados en el localStorage
  let datosJSON = localStorage.getItem("datos");

  // Si hay datos guardados, agregar los nuevos datos a la lista
  if (datosJSON) {
    // Convertir la cadena JSON a un array de objetos
    const datosArray = JSON.parse(datosJSON);
    // Agregar el nuevo objeto a la lista
    datosArray.push(datos);
    // Convertir la lista de objetos a una cadena JSON
    datosJSON = JSON.stringify(datosArray);
  } else {
    // Si no hay datos guardados, crear un array con el objeto
    datosJSON = JSON.stringify([datos]);
  }

  // Guardar los datos en el localStorage
  localStorage.setItem("datos", datosJSON);

  // Mostrar un mensaje de confirmación
  alert("Los datos se han guardado correctamente.");

  // Limpiar los inputs
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("edad").value = "";

  // Mostrar los datos en la lista
  mostrarDatos();
}

// Función para mostrar los datos guardados en el localStorage en el DOM como lista
function mostrarDatos() {
  // Obtener los datos guardados en el localStorage
  const datosJSON = localStorage.getItem("datos");

  // Si hay datos guardados
  if (datosJSON) {
    // Convertir la cadena JSON a un array de objetos
    const datosArray = JSON.parse(datosJSON);

    // Crear una lista HTML con los datos
    let listaHTML = "";
    for (let i = 0; i < datosArray.length; i++) {
      listaHTML += `<li>Nombre: ${datosArray[i].nombre}, Apellido: ${datosArray[i].apellido}, Edad: ${datosArray[i].edad}</li>`;
    }

    // Mostrar la lista en el DOM
    document.getElementById("listaDatos").innerHTML = listaHTML;
  }
}

// Mostrar los datos guardados al cargar la página
mostrarDatos();
