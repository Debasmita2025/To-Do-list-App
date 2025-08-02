const addButton = document.querySelector(".btn-success");
const todoContainer = document.querySelector(".container");

addButton.addEventListener("click", () =>{
  const inputBox = document.querySelector('input[type="text"]');
  const dateBox = document.querySelector('input[type="date"]');
  const todoText = inputBox.value.trim();
  const todoDate = dateBox.value;

  if(todoText === "" || todoDate === ""){
    alert("Enter both task and date.");
    return;
  }

  const row = document.createElement("div");
  row.className = "row kg-row";

  row.innerHTML = `
      <div class="col-6 items">${todoText}</div>
      <div class="col-4 items">${todoDate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger kg-btn w-75">Delete</button>
      </div>
    `;

    row.querySelector(".btn-danger").addEventListener("click", () => {
      todoContainer.removeChild(row);
    });

    todoContainer.appendChild(row);
    inputBox.value = "";
    dateBox.value = ""; 
})