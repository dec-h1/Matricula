
/* const getAlumnos = async () => {
    const response = await fetch('../data/alumno.json')
    const data = await response.json()
    return data
  } */

const getAlumnos=()=>{
    fetch('../data/alumno.json')
    .then((response)=>response.json())
    .then((data)=>{
         return data
    })
    

}
getAlumnos()
// .then((data)=>console.log(data))