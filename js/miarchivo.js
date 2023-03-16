alert("Bienvenido para inscribirse de la matricula de karate, ingrese la opcion de la matricula, para salir ingrese 0")
let seleccionarMatricula=Number(prompt( "1-Si eres Universitario 20% por descuento de la mensualidad \r 2-No eres universitario paga la matricula 20 y la mensualidad 150 "))
let selecionarCantidad;
let total=0;
let precio=150;

const cantidad = (cant, precio) => {
    return cant * precio
  }

  while (seleccionarMatricula != 0 ) {
    switch (seleccionarMatricula) {
      case 1:
        total=total+1
        llenarDatos() 
        
        break;
      case 2:
        total=total+1
        mensual= precio
        llenarDatos() 
        break;
  
      default:
        break;
    }
    seleccionarMatricula=Number(prompt( "1-Si eres Universitario 20% por descuento de la mensualidad \r 2-No eres universitario paga la matricula 20 y la mensualidad 150 \r 3- Salir 0"))
  }

 function llenarDatos(){

    let nombre = prompt('Cual es tu nombre?'," ")
    let apellido= prompt('Cual es tu apellido?'," ")
    let edad = prompt('Cual es tu edad?'," ")
    let celular=Number(prompt('Cual es tu numero de celular?'," "))
    const currentDate = new Date()
    const year = currentDate.getFullYear() - Number(edad)
    if(seleccionarMatricula==1){
      mensual= precio-precio*0.2
    }else {mensual= precio}

    const datos = "\r Nombre: "+ nombre+ "\r apellido: " + apellido+"\r edad: "+edad+"\r Nro de Celular: "+celular+"\r Año: "+year+"\r mensual: "+mensual;
    alert("lista registrada: " + datos)
 
 }

alert("el total de la persona esta inscrita: " + total +" personas")
