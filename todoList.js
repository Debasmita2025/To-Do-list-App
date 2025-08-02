const addButton = document.querySelector(".btn-success");
const todoContainer = document.querySelector(".container");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function createTaskRow(taskText, taskDate) {
  const row = document.createElement("div");
  row.className = "row kg-row mb-2";

  row.innerHTML = `
    <div class="col-6 items">${taskText}</div>
    <div class="col-4 items">${taskDate}</div>
    <div class="col-2">
      <button type="button" class="btn btn-danger w-75">Delete</button>
    </div>
  `;

 
  row.querySelector(".btn-danger").addEventListener("click", () => {
    todoContainer.removeChild(row);
    tasks = tasks.filter((t) => !(t.text === taskText && t.date === taskDate));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  todoContainer.appendChild(row);
}


window.addEventListener("DOMContentLoaded", () => {
  tasks.forEach((task) => {
    createTaskRow(task.text, task.date);
  });
});


addButton.addEventListener("click", () => {
  const inputBox = document.querySelector('input[type="text"]');
  const dateBox = document.querySelector('input[type="date"]');
  const taskText = inputBox.value.trim();
  const taskDate = dateBox.value;

  if (taskText === "" || taskDate === "") {
    alert("Please enter both task and date.");
    return;
  }

 
  const newTask = { text: taskText, date: taskDate };
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  createTaskRow(taskText, taskDate);


  inputBox.value = "";
  dateBox.value = "";
});
