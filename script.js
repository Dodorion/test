document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("todoInput");
  const button = document.getElementById("addBtn");
  const list = document.getElementById("todoList");

  button.addEventListener("click", () => {
    const text = input.value;
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    list.appendChild(li);
    input.value = "";
  });
});
