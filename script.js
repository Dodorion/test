document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("todoInput");
  const button = document.getElementById("addBtn");
  const list = document.getElementById("todoList");

  button.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

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

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // verhindert Klick auf li
      li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
  });

});
