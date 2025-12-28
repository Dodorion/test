document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("todoInput");
  const button = document.getElementById("addBtn");
  const list = document.getElementById("todoList");

  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");

  let todos = [];

  function loadTodos() {
    const data = localStorage.getItem("todos");
    if (data) {
      todos = JSON.parse(data);
      todos.forEach(todo => createTodoElement(todo));
    }
    updateProgress();
  }

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function updateProgress() {
    const total = todos.length;
    const done = todos.filter(t => t.done).length;
    const percent = total ? (done / total) * 100 : 0;

    progressBar.style.width = percent + "%";
    progressText.textContent = `${done} / ${total} erledigt`;
  }

  function createTodoElement(todo) {
    const li = document.createElement("li");
    li.textContent = todo.text;

    if (todo.done) li.classList.add("done");

    li.addEventListener("click", () => {
      todo.done = !todo.done;
      li.classList.toggle("done");
      saveTodos();
      updateProgress();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      todos = todos.filter(t => t !== todo);
      li.remove();
      saveTodos();
      updateProgress();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    updateProgress();
  }

  button.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    const todo = { text, done: false };
    todos.push(todo);
    createTodoElement(todo);
    saveTodos();

    input.value = "";
    input.focus(); // Fokus direkt wieder auf Input
  });

  // Enter-Taste hinzufügen
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      button.click();
    }
  });

  loadTodos();

  // ✅ Cursor direkt in Input setzen beim Laden
  input.focus();
});
