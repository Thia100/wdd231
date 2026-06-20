const taskInput = document.querySelector("#taskInput");
const priority = document.querySelector("#priority");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskContainer = document.querySelector("#taskContainer");

let tasks = [];

const savedTasks = localStorage.getItem("tasks");
if (savedTasks) {
  tasks = JSON.parse(savedTasks);
}
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (!taskText) return;

  const task = {
    id: Date.now(),
    text: taskText,
    priority: priority.value,
    completed: false,
  };
  tasks.push(task);
  saveTasks();
  displayTasks();
  taskInput.value = "";
});

function displayTasks() {
  taskContainer.innerHTML = "";
  if (tasks.length === 0) {
    taskContainer.innerHTML = `
    <p>
      No tasks yet.
      Add your first study task.
    </p>
  `;

    return;
  }
  tasks.forEach((task) => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("taskCard");

    if (task.completed) {
      taskCard.classList.add("completed");
    }

    taskCard.innerHTML = `
    <div class="taskDiv">
        <p>${task.text}</p>
        <div class="taskActions">
        <button class="completeBtn">
            <i class="fa-solid fa-check"></i>
        </button>
        <button class="deleteBtn">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>
    <p>${task.priority}</p>
    
    `;

    taskCard.querySelector(".completeBtn").addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      displayTasks();
    });

    taskCard.querySelector(".deleteBtn").addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id != task.id);
      saveTasks();
      displayTasks();
    });
    taskContainer.appendChild(taskCard);
  });
}
displayTasks();
