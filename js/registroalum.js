alert("Bienvenido para inscribirse de la matricula de karate, ingrese la opcion de la matricula, para salir ingrese 0")
let seleccionarMatricula=Number(prompt( " 1- Realizar Matriculas \r 2- Mostrar Matriculados\r 3- Borrar Alumno\r 4- Editar Alumno\r 5- Salir 0"))
let opcion=0
let cen=0
let tope=0
let max=0
let nombre=[];
let apellido=[];
let celular=[];
let edad=[];
let mensual=[];
let year=[];
/* const alumnos=[];
ojo ahi 
let miId=0*/
let miId=alumnos.length;

let precio=150;
seleccionarMatricula=seleccionarMatricula;
if(seleccionarMatricula==""){
    alert("Por favor ingresa el numero de opcion de la matricula")
}
else{
    while (seleccionarMatricula != 0 ) {
        switch (seleccionarMatricula) {
          case 1:
            opcion=1
            matricula();
            break;
          case 2:
            mostrarMatriculados();
            break;
          case 3:
            opcion=2
            borrarAlumno();
            break;
          case 4:
            editarAlumno();
            break;
          default:
            alert("no se encuentra opciones solamente seleciona 1 hasta 4");
            break;
        }
   
        seleccionarMatricula=Number(prompt( " 1- Realizar Matriculas \r 2- Mostrar Matriculados\r 3- Borrar Alumno\r 4- Editar Alumno\r 5- Salir 0"))
       const seleccion=seleccionarMatricula
       console.log(seleccionarMatricula)
        if(seleccion==""){
            alert("Por favor ingresa el numero de opcion de la matricula")
        }
      }
}
  
function matricula(){
 
let seleccionarMatricula=Number(prompt( "1-Si eres Universitario 20% por descuento de la mensualidad \r 2-No eres universitario paga la matricula 20 y la mensualidad 150 "))
let total=0;  
 while (seleccionarMatricula != 0 ) {
    switch (seleccionarMatricula) {
      case 1:
        total=total+1
        llenarDatos(seleccionarMatricula) 
        tope++;
        break;
      case 2:
        total=total+1
        mensual= precio
        llenarDatos(seleccionarMatricula) 
        tope++;
        break;
  
      default:
        break;
    }
    seleccionarMatricula=Number(prompt( "1-Si eres Universitario 20% por descuento de la mensualidad \r 2-No eres universitario paga la matricula 20 y la mensualidad 150 \r 3- Salir 0"))
  }
/* 
     cont += nombre[tope] + "\r "+apellido[tope]+"\r ";
    alert(cont);  */
  alert("el total de la persona esta inscrita: " + total +" personas")

//inserta datos
  /*   let cont="";
    alert ("Lista de registro, ingrese nuevo registro de alumno")
    let x = prompt("Ingresa tu nombre:", "");
    nombre[tope+1] = x;
    tope++;
    cont += nombre[tope] + "\r ";
    alert(cont); */
    
}
function mostrarMatriculados(){
 let texto="";
  for(const alumno of alumnos){
        texto += `
        id: ${alumno.id},
        nombre: ${alumno.nombre},
        apellido: ${alumno.apellido},
        edad: ${alumno.edad},
        celular: ${alumno.celular},
        mensual:${alumno.mensual},
        \r`
    } 
    alert(texto);
}
function borrarAlumno(){
   let x;
   if(alumnos.length>0){
    alert("El registro esta conformado de la siguiente manera");
    mostrarMatriculados();
    x=Number(prompt("Escoge el Id que desea eliminar?"))
    const indice = alumnos.findIndex((alumno)=>alumno.id==x) 
    if(indice==-1){
        alert("No existe el registro")

    }else {
        alumnos.splice(indice,1)
        alert("se elimino el registro") 
    }
   }
    else
        alert("El registro esta vacio")
}
function editarAlumno(){
    let x;
    if(alumnos.length>0){
     alert("El registro esta conformado de la siguiente manera");
     mostrarMatriculados();
     x=Number(prompt("Escoge el Id que desea modificar?"))
     const indice = alumnos.findIndex((alumno)=>alumno.id==x) 
     if(indice==-1){
         alert("No existe el registro")
     }else {
        let nombre = prompt('Cual es tu nombre?'," ")
        let apellido= prompt('Cual es tu apellido?'," ")
        let edad = prompt('Cual es tu edad?'," ")
        let celular=Number(prompt('Cual es tu numero de celular?'," "))
         alumnos[indice].nombre=nombre
         alumnos[indice].apellido=apellido
         alumnos[indice].edad=edad
         alumnos[indice].celular=celular
         alert("se actualizo el registro")  
     }
    }
     else
         alert("El registro esta vacio")
}
//datos
function llenarDatos(seleccionarMatricula){

    const datos=[]
    let nombre = prompt('Cual es tu nombre?'," ")
    nombre[tope+1] = nombre;
    let apellido= prompt('Cual es tu apellido?'," ")
    apellido[tope+1] = apellido;
    let edad = prompt('Cual es tu edad?'," ")
    edad[tope+1] = edad;
    let celular=Number(prompt('Cual es tu numero de celular?'," "))
    celular[tope+1] = celular;
    const currentDate = new Date()
    const year = currentDate.getFullYear() - Number(edad)
    year[tope+1] = year;
    let mensualTotal
    if(seleccionarMatricula==1){
        mensualTotal=precio-precio*0.2
      mensual[tope+1]= precio-precio*0.2
    }else {mensual[tope+1]= precio
        mensualTotal=precio}
    console.log(nombre,apellido,edad,celular)
    miId++
    alumnos.push({
            id: miId,
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            celular: celular,
            mensual:mensualTotal,
    })
    datos[tope+1] = "\r Nombre: "+ nombre[tope+1]+ "\r apellido: " + apellido[tope+1]+"\r edad: "+edad[tope+1]+"\r Nro de Celular: "+celular[tope+1]+"\r Año: "+year[tope+1]+"\r mensual: "+mensual[tope+1];
   /*  alert("lista registrada: " + datos[tope+1])
  */
 }
