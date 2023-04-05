alert("Bienvenido para inscribirse de la matricula de karate, ingrese la opcion de la matricula, para salir ingrese 0")
let seleccionarMatricula=Number(prompt( " 1- Realizar Matriculas \r 2- Mostrar Matriculados\r 3- Borrar Alumno\r 4- Editar Alumno\r 5- Salir 0"))
let opcion=0
let cen=0
let tope=0
let max=0
let nombre=[];
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
  
    let cont="";
    alert ("Lista de registro, ingrese nuevo registro de alumno")
    let x = prompt("Ingresa tu nombre:", "");
    nombre[tope+1] = x;
    tope++;
    cont += nombre[tope] + "\r ";
    alert(cont);
    
}
function mostrarMatriculados(){
 
  for(let i=1;i<=tope;i++){
        cont1 += nombre[i] + "\r";
    } 
    alert(cont1);
}
function borrarAlumno(){
   let x;
   if(tope>0){
    alert("El registro esta conformado de la siguiente manera");
    mostrarMatriculados();
    if(opcion==2)
        x=Number(prompt("Escoge el numero de elemento que desea eliminar?"))
    else
        x=Number(prompt("Escoge el numero de elemento que desea modificar"))
    let i=1;
    while (i<=tope)
    {
        if( i==x)
        {
            for(let j=i;j<=tope;j++){
                nombre[j]=nombre[j+1];
            }
            tope=tope-1;
            i=tope+1;
            cen=1;
        }
        else{
            i++;
            cen=0;
        }
    }
    if(cen==0){
        alert("No existe el registro,"+ x)
        }
    mostrarMatriculados();
    }
    else
        alert("El registro esta vacio")
}
function editarAlumno(){
   borrarAlumno();
   if(cen==1)
        matricula();
}
