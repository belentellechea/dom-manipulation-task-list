let tasks = [
  {
    id: 0,
    owner: "Pelado Cáceres",
    name: "Wash the car",
    description: "Wash the car before crash it 💥🚗",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSynqaOG2CBeapwLA8A7W3C8kmHhNnNraWl7c2rz1eykm_dY_cjB9erHZawnIFOIo3MbcAts4L7N8W7otPrEPvFmzg9UJo7LONUpVhyPpz1gjDfbMOcetAy52k0YdDDoNaZSQ&usqp=CAc",
  },
  {
    id: 1,
    owner: "Developer #432",
    name: "Take humans out of Earth",
    description: "Looking for a new planet to destroy 🌎",
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg",
  },
  {
    id: 2,
    owner: "Another big fish",
    name: "Testing in Production",
    description: `We don't worry about testing, we test in production 🤪`,
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  },
  {
    id: 3,
    owner: "The return of the Pug",
    name: "Thinking about all the mankind problems",
    description: "Eat, Sleep and wear a jedi robe in order to solve it 🐶",
    imgUrl:
      "https://w0.peakpx.com/wallpaper/381/236/HD-wallpaper-pug-dog-pet-funny-sad.jpg",
  },
  {
    id: 4,
    owner: "Mark Zuckerberg",
    name: "Destroy the entire planet earth",
    description: "Encourage people to live in a metaverse🌈",
    imgUrl: "https://pbs.twimg.com/media/Ew2_PGEWgAE3V5-.jpg",
  },
];

let currentIdNumber = tasks.length; 
//guarda el num de tareas actuales para luego cuando 
//se quiera agregar una nueva se le asigne un id único 

// 0 - Bajar repo, todos los ejercicios seran parte del mismo proyecto js-dom-manipulation-essentials
// Hacer una funcion que cree dinamicamente las task
function createTaskComponent(task) {
  const taskComponent = document.createElement("li")
  taskComponent.id = task.id
  taskComponent.classList.add("task")
  const templateContent = `
    <img
      src="${task.imgUrl}"
    />
    <div class="task-information">
      <h3>Task Owner</h3>
      <p>${task.owner}</p>
      <h3>Task Name</h3>
      <p>${task.name}</p>
      <h3>Task Description</h3>
      <p>${task.description}</p>
    </div>
  </li>`;

  taskComponent.innerHTML = templateContent
  taskComponent.addEventListener("click", () => deleteTaskHandler(taskComponent))
  //event listener para llamar a la función deleteTaskHandler y eliminar una tarea
  //cuando se hace click sobre ella 
  
  const ul = document.querySelector("ul")
  ul.appendChild(taskComponent)
}

function loadTasks(tasks) {
  tasks.forEach((element)=> {
    createTaskComponent(element) //se añade cada tarea al dom 
  })
}

loadTasks(tasks); 

const addTaskButton = document.getElementsByClassName("submit-button")[0];
addTaskButton.addEventListener("click", (event) => {
  event.preventDefault(); // Evitar el submit default
  addTaskHandler();
})

const clearTasksButton = document.getElementsByClassName("clear-button")[0];
clearTasksButton.addEventListener("click", (event) => {
  event.preventDefault(); // Evitar el submit default
  deleteAllTaskHandler();
})

// 1 - Funcion
// Mostrar en un mensaje de alerta los valores del form
function addTaskAlert(newTask) {
  alert(`Task Name: ${newTask.name}\nTask Owner: ${newTask.owner}\nDescription: ${newTask.description}\nImage URL: ${newTask.imgUrl}`)
}

// 2 - Funcion
// Agregar elemento en la lista al llenar el formulario
function addTaskHandler(event) {
  const newTask = {
    id: currentIdNumber++,
    owner: document.getElementById("ownerInput").value,
    name: document.getElementById("nameInput").value,
    description: document.getElementById("descriptionInput").value,
    imgUrl: document.getElementById("imgUrlInput").value,
  }

  createTaskComponent(newTask)
  tasks.push(newTask) 

  addTaskAlert(newTask)
}

// 3 - Funcion
// Eliminar elemento en la lista al hacer click sobre el elemento
function deleteTaskHandler(taskElement) {
  taskElement.remove()
  tasks = tasks.filter(task => task.id != taskElement.id)
  redirectWhenNoTask()
}

// 4 - Funcion
// Crear un boton para vaciar/eliminar todas las tareas
function deleteAllTaskHandler() {
  const ul = document.querySelector("ul");
  ul.innerHTML = ''; 
  tasks = []; 
  redirectWhenNoTask();
}

// 5 - Funcion
// Si ya no quedan tareas navegar programaticamente
// a www.youtube.com
function redirectWhenNoTask() {
  if (tasks.length === 0) {
    window.location.href = "https://www.youtube.com";
  }
  //window.location se puede utilizar para obtener la 
  //dirección de la página actual y redirigir el navegador 
  //a una página nueva 
}
