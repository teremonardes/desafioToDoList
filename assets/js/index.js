const tareaNueva = document.querySelector("#tareaNueva")
const agregarTarea = document.querySelector("#agregarTarea")
const tareasPorHacer = document.querySelector("#tareasPorHacer")
const tareasRealizadas = document.querySelector("#tareasRealizadas")

const tareas = [

    {"id":1 , "nombre": "Lavar platos", "completada": false},
    {"id":2 , "nombre": "Hacer tarea Desafío Latam", "completada": false}, 
    {"id":3 , "nombre": "Agendar hora doctor", "completada": false},
]



function renderizarTareas() {
    let contenidoHTML = '';
    for (const tarea of tareas) {
      const estado = tarea.completada ? "✅" : "❌";
      contenidoHTML += `<li>${tarea.id}: ${tarea.nombre} ${estado}<button id="borrar" onclick="borrar(${tarea.id})">Eliminar</button></li> 
      <button onclick="completar(${tarea.id})"
      id="completada" >Completada</button></li>`;
    }
    
    tareasPorHacer.innerHTML = contenidoHTML;
   totalTareas.innerHTML = `<p>Total de tareas: ${tareas.length}</p>`;
   let totalRealizadas = tareas.filter(x=>x.completada === true); 
tareasRealizadas.innerHTML = `<p>Realizadas: ${totalRealizadas.length}</p>`;
}
 

agregarTarea.addEventListener("click", () => {
   
  
  const nuevaTarea = tareaNueva.value;
{
    const id = tareas.length + 1;
    const tarea = { id, nombre: nuevaTarea, };

    tareas.push(tarea);
    renderizarTareas();

    tareaNueva.value = "";
  }
});

  
  function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index,1)
    renderizarTareas()
  }



  function completar(id) {
    const tareaEncontrada = tareas.find( tarea => tarea.id === id)
    if (tareaEncontrada) {
      tareaEncontrada.completada = !tareaEncontrada.completada; 
      renderizarTareas();
  }

  }


renderizarTareas()




