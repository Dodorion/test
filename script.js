const input = document.getElementById("todoInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("todoList");

li.addEventListener("click", () => {
  console.log("geklickt!");
});


  // Neues Listenelement
  const li = document.createElement("li");
  li.textContent = text;

  // Klick = erledigt
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Löschen-Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
});
