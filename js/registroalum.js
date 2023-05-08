let miId = alumnos?.length;
let precio = 150;

function matriculaDom() {
  const contenedorPrincipal = document.getElementById("principal");
  contenedorPrincipal.innerHTML = `<div>
  <h1>Promoción</h1>
  <input type="radio" name="universitario" id="uni" value="uni">
  <label for="uni">Si eres Universitario 20% por descuento de la mensualidad</label>
  <br>
  <input type="radio" name="universitario" id="sinUni" value="sinUni">
  <label for="sinUni">No eres universitario paga la matricula 20 y la mensualidad 150</label>
  <br><br>
  <label for="nombre">Nombre</label>
  <input type="text" id="inputNombre">
  <br>
  <label for="apellido">Apellido</label>
  <input type="text" id="inputApellido">
  <br>
  <label for="edad">Edad</label>
  <input type="text" id="inputEdad">
  <br>
  <label for="celular">Celular</label>
  <input type="text" id="inputCelular">
  <br><br>
  <button id="btnRegistrar">Registrar Alumno</button>
  <button id="btnVolver">Volver</button>
</div>`;
  const btnVolver = document.getElementById("btnVolver");
  btnVolver.addEventListener("click", () => {
    inicio();
  });
  const btnRegistrar = document.getElementById("btnRegistrar");
  btnRegistrar.addEventListener("click", () => {
    llenarDatosDom();
  });
}

function llenarDatosDom() {
  let nombre = document.getElementById("inputNombre").value;
  let apellido = document.getElementById("inputApellido").value;
  let edad = document.getElementById("inputEdad").value;
  let celular = document.getElementById("inputCelular").value;
  let elementoActivo = document.querySelector(
    'input[name="universitario"]:checked'
  );

  const mensualTotal =
    elementoActivo.value == "uni" ? precio - precio * 0.2 : precio;
  miId++;
  alumnos.push({
    id: miId,
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    celular: celular,
    mensual: mensualTotal,
  });
  Swal.fire("Bienvenido!", "Se registro correctamente!", "success");
}

function mostrarMatriculados() {
  let texto = "";
  for (const alumno of alumnos) {
    texto += `
        id: ${alumno.id}<br>
        nombre: ${alumno.nombre}<br>
        apellido: ${alumno.apellido}<br>
        edad: ${alumno.edad}<br>
        celular: ${alumno.celular}<br>
        mensual:${alumno.mensual}
        <br><br><br>`;
  }
  texto += `<button id="btnVolver">Volver</button>`;
  const contenedorPrincipal = document.getElementById("principal");
  contenedorPrincipal.innerHTML = texto;

  const btnVolver = document.getElementById("btnVolver");
  btnVolver.addEventListener("click", () => {
    inicio();
  });
}
function borrarAlumno() {
  if (alumnos.length > 0) {
    Swal.fire({
      title: "Escoge el Id que desea eliminar?",
      input: "number",
      inputPlaceholder: "Selecciona el Id",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        const idSeleccionado = resultado.value;
        const indice = alumnos.findIndex(
          (alumno) => alumno.id == idSeleccionado
        );
        if (indice == -1) {
          Swal.fire("No existe el registro!");
        } else {
          alumnos.splice(indice, 1);
          Swal.fire("Borrado!", "Se elimino el registro!", "success");
          inicio();
        }
      }
    });
  } else document.write("El registro esta vacio");
}
function editarAlumno() {
  if (alumnos.length > 0) {
    Swal.fire({
      title: "Escoge el Id que desea modificar?",
      input: "number",
      inputPlaceholder: "Selecciona el Id",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        const idSeleccionado = resultado.value;
        const indice = alumnos.findIndex(
          (alumno) => alumno.id == idSeleccionado
        );

        if (indice == -1) {
          document.write("No existe el registro");
        } else {
          const contenedorPrincipal = document.getElementById("principal");
          contenedorPrincipal.innerHTML = `<div>
              <label for="nombre">Nombre</label>
              <input type="text" id="inputNombre" value=${alumnos[indice].nombre}>
              <label for="apellido">Apellido</label>
              <input type="text" id="inputApellido" value=${alumnos[indice].apellido}>
              <label for="edad">Edad</label>
              <input type="text" id="inputEdad" value=${alumnos[indice].edad}>
              <label for="celular">Celular</label>
              <input type="text" id="inputCelular" value=${alumnos[indice].celular}>
              <button id="btnActualizar">Actualizar Alumno</button>
              <button id="btnVolver">Volver</button>
            </div>`;
          const btnVolver = document.getElementById("btnVolver");
          btnVolver.addEventListener("click", () => {
            inicio();
          });
          const btnActualizar = document.getElementById("btnActualizar");
          btnActualizar.addEventListener("click", () => {
            alumnos[indice].nombre =
              document.getElementById("inputNombre").value;
            alumnos[indice].apellido =
              document.getElementById("inputApellido").value;
            alumnos[indice].edad = document.getElementById("inputEdad").value;
            alumnos[indice].celular =
              document.getElementById("inputCelular").value;
            Swal.fire("Correcto!", "Datos actualizado!", "success");
          });
        }
      }
    });
  } else {
    Swal.fire("El registro esta vacio!");
  }
}
function inicio() {
  const contenedorPrincipal = document.getElementById("principal");
  contenedorPrincipal.innerHTML = ` 
  <h1 id="titulo"></h1>
  <div id="navegador">
  </div>
  <p id="resultado"></p>`;
  document.getElementById("titulo").innerText =
    "Bienvenido al sistema matricula de karate";
  document.getElementById("navegador").innerHTML = `<ol>
<li id="seccion1"><a href="#">Realizar Matriculas</a></li>
<li id="seccion2"><a href="#">Mostrar Matriculados</a></li>
<li id="seccion3"><a href="#">Borrar Alumno</a></li>
<li id="seccion4"><a href="#">Editar Alumno</a></li> 
</ol>`;
  const liRealizarMatricula = document.getElementById("seccion1");
  liRealizarMatricula.addEventListener("click", () => {
    matriculaDom();
  });
  const liMostrarMatricula = document.getElementById("seccion2");
  liMostrarMatricula.addEventListener("click", () => {
    mostrarMatriculados();
  });
  const liBorrarAlumno = document.getElementById("seccion3");
  liBorrarAlumno.addEventListener("click", () => {
    borrarAlumno();
  });
  const liEditarAlumno = document.getElementById("seccion4");
  liEditarAlumno.addEventListener("click", () => {
    editarAlumno();
  });
}
inicio();
