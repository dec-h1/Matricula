alert("Bienvenido para inscribirse de la matricula de karate, ingrese la opcion de la matricula, para salir ingrese 0")
let seleccionarMatricula=Number(prompt( " 1- Matriculas \r 2- Mostrar Matriculados\r 3- Borrar Alumno\r 4- Editar Alumno\r 5- Salir 0"))
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
           /*  opcion=1 */
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
       /*  seleccionarMatricula=prompt( " 1- Matriculas \r 2- Mostrar Matriculados\r 3- Borrar Alumno\r 4- Editar Alumno\r 5- Salir 0") */
        seleccionarMatricula=Number(prompt( " 1- Matriculas \r 2- Mostrar Matriculados\r 3- Borrar Alumno\r 4- Editar Alumno\r 5- Salir 0"))
       const seleccion=seleccionarMatricula
       console.log(seleccionarMatricula)
        if(seleccion==""){
            alert("Por favor ingresa el numero de opcion de la matricula")
        }/* else if((seleccion==0) & (seleccion<5)){
             alert("Muchas Gracias por inscribirse bienvenidos de escuela de karate y hasta luego!!")
           } 
        seleccionarMatricula=seleccion */
      }
}
  
function matricula(){
  
    let cont="";
    alert ("Lista de registro, ingrese nuevo registro de alumno")
    
    for (let i = 0; i <= 1; i++) {
        let x = prompt("Ingresa tu nombre:", "");
        nombre[i] = x;
    
    }
    for (let i = 0; i <= 1; i++) {
        cont += nombre[i] + " ";
    }
    alert(cont);
    tope++;
    
    /* const nombre=prompt("Ingrese tu nombre: ") */
  /*   if(tope<max){
        if(opcion==1)
    } */

}
function mostrarMatriculados(){
  /* alert("hola .. mostrar") */
  for(let i=0;i<=tope;i++){
        alert(nombre[i])
    } 

}
function borrarAlumno(){
    alert("borrar")
}
function editarAlumno(){
    alert("editar")
}
function ordenar(){
    alert("ordenar")
/*     for(let i=1;i<=tope-1;i++){
        for(let j=i+1;j<=tope;j++){
            if()
        }
    } */
}