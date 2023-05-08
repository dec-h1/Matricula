const pintarAlumnos = async () => {
    const data = await getAlumnos()
    const contenedor = document.getElementById("alumno-contenedor");

    data.forEach(alumno => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `<div class="card-image">
                          <img src=${alumno.imagen}>
                          <span class="card-title">${alumno.nombre}</span>
                          <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id=${alumno.id} class="material-icons agregar">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${alumno.celular}</p>
                            <p>${alumno.mensual}</p>
                        </div>
                       `
      contenedor.appendChild(div);
    });
  };