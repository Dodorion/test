document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("todoInput");
  const button = document.getElementById("addBtn");
  const list = document.getElementById("todoList");

  let todos = [];

  // -------------------------
  // Laden beim Start
  // -------------------------
  function loadTodos() {
    const data = localStorage.getItem("todos");
    if (data) {
      todos = JSON.parse(data);
      todos.forEach(todo => createTodoElement(todo));
    }
  }

  // -------------------------
  // Speichern
  // -------------------------
  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // -------------------------
  // Element erstellen
  // -------------------------
  function createTodoElement(todo) {
    const li = document.createElement("li");
    li.textContent = todo.text;

    if (todo.done) {
      li.classList.add("done");
    }

    // Klick = erledigt
    li.addEventListener("click", () => {
      todo.done = !todo.done;
      li.classList.toggle("done");
      saveTodos();
    });

    // Löschen
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      todos = todos.filter(t => t !== todo);
      li.remove();
      saveTodos();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  }

  // -------------------------
  // Neues Todo hinzufügen
  // -------------------------
  button.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    const todo = {
      text: text,
      done: false
    };

    todos.push(todo);
    createTodoElement(todo);
    saveTodos();

    input.value = "";
  });

  // Start
  loadTodos();
});
