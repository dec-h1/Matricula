/* document.write("Bienvenido para inscribirse de la matricula de karate, ingrese la opcion de la matricula, para salir ingrese 0")
let seleccionarMatricula=Number(window.prompt( " 1- Realizar Matriculas \r 2- Mostrar Matriculados\r 3- Borrar Alumno\r 4- Editar Alumno\r 5- Salir 0"))
document.write(seleccionarMatricula) */


// let seleccionarMatricula=Number(window.prompt( " 1- Realizar Matriculas \r 2- Mostrar Matriculados\r 3- Borrar Alumno\r 4- Editar Alumno\r 5- Salir 0"))

let opcion = 0
let cen = 0
let tope = 0
let max = 0
let nombre = [];
let apellido = [];
let celular = [];
let edad = [];
let mensual = [];
let year = [];
let miId = alumnos.length;
let precio = 150;
// seleccionarMatricula=seleccionarMatricula;
function versionAnterior() {
  if (seleccionarMatricula == "") {
    document.write("Por favor ingresa el numero de opcion de la matricula")
  }
  else {
    while (seleccionarMatricula != 0) {
      switch (seleccionarMatricula) {
        case 1:
          opcion = 1
          matricula();
          break;
        case 2:
          mostrarMatriculados();
          break;
        case 3:
          opcion = 2
          borrarAlumno();
          break;
        case 4:
          editarAlumno();
          break;
        default:
          document.write("no se encuentra opciones solamente seleciona 1 hasta 4");
          break;
      }

      seleccionarMatricula = Number(window.prompt(" 1- Realizar Matriculas \r 2- Mostrar Matriculados\r 3- Borrar Alumno\r 4- Editar Alumno\r 5- Salir 0"))
      const seleccion = seleccionarMatricula
      console.log(seleccionarMatricula)
      if (seleccion == "") {
        document.write("Por favor ingresa el numero de opcion de la matricula")
      }
    }
  }
}


function matriculaDom() {

  const contenedorPrincipal = document.getElementById("principal")
  contenedorPrincipal.innerHTML = `<div>

  <p>Promoción</p>
  <input type="radio" name="universitario" id="uni" value="uni">
  <label for="uni">Si eres Universitario 20% por descuento de la mensualidad</label>
  <br>
  <input type="radio" name="universitario" id="sinUni" value="sinUni">
  <label for="sinUni">No eres universitario paga la matricula 20 y la mensualidad 150</label>
  <label for="nombre">Nombre</label>
  <input type="text" id="inputNombre">
  <label for="apellido">Apellido</label>
  <input type="text" id="inputApellido">
  <label for="edad">Edad</label>
  <input type="text" id="inputEdad">
  <label for="celular">Celular</label>
  <input type="text" id="inputCelular">
  <button id="btnRegistrar">Registrar Alumno</button>
  <button id="btnVolver">Volver</button>
</div>`
const btnVolver=document.getElementById("btnVolver")
btnVolver.addEventListener("click", ()=>{
  inicio()
})
const btnRegistrar=document.getElementById("btnRegistrar")
btnRegistrar.addEventListener("click", ()=>{
  llenarDatosDom()
})
}

function llenarDatosDom() {
  let nombre = document.getElementById("inputNombre").value
  let apellido = document.getElementById("inputApellido").value
  let edad = document.getElementById("inputEdad").value
  let celular = document.getElementById("inputCelular").value
  let elementoActivo = document.querySelector('input[name="universitario"]:checked');
  console.log(elementoActivo.value)
  let mensualTotal
  if (elementoActivo.value == "uni") {
    mensualTotal = precio - precio * 0.2
  } else {
    mensualTotal = precio
  }
  miId++
  alumnos.push({
    id: miId,
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    celular: celular,
    mensual: mensualTotal,
  })
  alert("se registro correctamente")
}
function matricula() {

  let seleccionarMatricula = Number(window.prompt("1-Si eres Universitario 20% por descuento de la mensualidad \r 2-No eres universitario paga la matricula 20 y la mensualidad 150 "))
  let total = 0;
  while (seleccionarMatricula != 0) {
    switch (seleccionarMatricula) {
      case 1:
        total = total + 1
        llenarDatos(seleccionarMatricula)
        tope++;
        break;
      case 2:
        total = total + 1
        mensual = precio
        llenarDatos(seleccionarMatricula)
        tope++;
        break;

      default:
        break;
    }
    seleccionarMatricula = Number(window.prompt("1-Si eres Universitario 20% por descuento de la mensualidad \r 2-No eres universitario paga la matricula 20 y la mensualidad 150 \r 3- Salir 0"))
  }
  /* 
       cont += nombre[tope] + "\r "+apellido[tope]+"\r ";
      alert(cont);  */
  // document.write("el total de la persona esta inscrita: " + total +" personas")


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
        <br><br><br>`
  }
  texto+=`<button id="btnVolver">Volver</button>`
  const contenedorPrincipal = document.getElementById("principal")
  contenedorPrincipal.innerHTML = texto

  const btnVolver=document.getElementById("btnVolver")
 btnVolver.addEventListener("click", ()=>{
  inicio()
})
}
function borrarAlumno() {
  let x;
  if (alumnos.length > 0) {
    // document.write("El registro esta conformado de la siguiente manera");
    // mostrarMatriculados();
    x = Number(window.prompt("Escoge el Id que desea eliminar?"))
    const indice = alumnos.findIndex((alumno) => alumno.id == x)
    if (indice == -1) {
      document.write("No existe el registro")

    } else {
      alumnos.splice(indice, 1)
      alert("se elimino el registro")
      inicio()
    }
  }
  else
    document.write("El registro esta vacio")
}
function editarAlumno() {
  let x;
  if (alumnos.length > 0) {
    /* document.write("El registro esta conformado de la siguiente manera");
    mostrarMatriculados(); */
    x = Number(window.prompt("Escoge el Id que desea modificar?"))
    const indice = alumnos.findIndex((alumno) => alumno.id == x)
    if (indice == -1) {
      document.write("No existe el registro")
    } else {
      const contenedorPrincipal = document.getElementById("principal")
  contenedorPrincipal.innerHTML = `<div>

  <label for="nombre">Nombre</label>
  <input type="text" id="inputNombre" value=${alumnos[indice].nombre}>
  <label for="apellido">Apellido</label >
  <input type="text" id="inputApellido" value=${alumnos[indice].apellido}>
  <label for="edad">Edad</label>
  <input type="text" id="inputEdad" value=${alumnos[indice].edad}>
  <label for="celular">Celular</label>
  <input type="text" id="inputCelular" value=${alumnos[indice].celular}>
  <button id="btnActualizar">Actualizar Alumno</button>
  <button id="btnVolver">Volver</button>
</div>`
const btnVolver=document.getElementById("btnVolver")
btnVolver.addEventListener("click", ()=>{
  inicio()
})
const btnActualizar=document.getElementById("btnActualizar")
btnActualizar.addEventListener("click", ()=>{
  alumnos[indice].nombre=document.getElementById("inputNombre").value
  alumnos[indice].apellido=document.getElementById("inputApellido").value
  alumnos[indice].edad=document.getElementById("inputEdad").value
  alumnos[indice].celular=document.getElementById("inputCelular").value

  
  alert("datos actualizado")
})
    }
  }
  else
    alert("El registro esta vacio")
}
//datos
function llenarDatos(seleccionarMatricula) {

  const datos = []
  let nombre = prompt('Cual es tu nombre?', " ")
  nombre[tope + 1] = nombre;
  let apellido = prompt('Cual es tu apellido?', " ")
  apellido[tope + 1] = apellido;
  let edad = prompt('Cual es tu edad?', " ")
  edad[tope + 1] = edad;
  let celular = Number(prompt('Cual es tu numero de celular?', " "))
  celular[tope + 1] = celular;
  const currentDate = new Date()
  const year = currentDate.getFullYear() - Number(edad)
  year[tope + 1] = year;
  let mensualTotal
  if (seleccionarMatricula == 1) {
    mensualTotal = precio - precio * 0.2
    mensual[tope + 1] = precio - precio * 0.2
  } else {
    mensual[tope + 1] = precio
    mensualTotal = precio
  }
  console.log(nombre, apellido, edad, celular)
  miId++
  alumnos.push({
    id: miId,
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    celular: celular,
    mensual: mensualTotal,
  })
  datos[tope + 1] = "\r Nombre: " + nombre[tope + 1] + "\r apellido: " + apellido[tope + 1] + "\r edad: " + edad[tope + 1] + "\r Nro de Celular: " + celular[tope + 1] + "\r Año: " + year[tope + 1] + "\r mensual: " + mensual[tope + 1];
  /*  alert("lista registrada: " + datos[tope+1])
 */
}

function inicio() {
  const contenedorPrincipal=document.getElementById("principal")
  contenedorPrincipal.innerHTML=` 
  <h1 id="titulo"></h1>
  <div id="navegador">
  </div>
  <p id="resultado"></p>`
  document.getElementById("titulo").innerText = "Bienvenido al sistema matricula de karate"
  document.getElementById("navegador").innerHTML =
    `<ol>
<li id="seccion1"><a href="#">Realizar Matriculas</a></li>
<li id="seccion2"><a href="#">Mostrar Matriculados</a></li>
<li id="seccion3"><a href="#">Borrar Alumno</a></li>
<li id="seccion4"><a href="#">Editar Alumno</a></li> 
</ol>`



  const liRealizarMatricula = document.getElementById("seccion1")
  liRealizarMatricula.addEventListener("click", () => {
    matriculaDom()
  })
  const liMostrarMatricula = document.getElementById("seccion2")
  liMostrarMatricula.addEventListener("click", () => {
    mostrarMatriculados()
  })
  const liBorrarAlumno = document.getElementById("seccion3")
  liBorrarAlumno.addEventListener("click", () => {
    borrarAlumno()
  })
  const liEditarAlumno = document.getElementById("seccion4")
  liEditarAlumno.addEventListener("click", () => {
    editarAlumno()
  })
}

inicio()