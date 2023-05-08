
const getAlumnos=()=>{
    fetch('../data/alumno.json')
    .then((response)=>response.json())
    .then((data)=>{
         return data
    })
}
getAlumnos()
