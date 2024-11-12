// Get references to DOM elements
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Add a new task to the list
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  // Task content
  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="task-actions">
      <button class="edit-btn">✏️</button>
      <button class="delete-btn">🗑️</button>
      <button class="complete-btn">✔️</button>
    </div>
  `;

  // Add task item to the list
  taskList.appendChild(taskItem);
  taskInput.value = "";

  // Event listener for editing a task
  taskItem.querySelector(".edit-btn").addEventListener("click", () => {
    editTask(taskItem, taskText);
  });

  // Event listener for deleting a task
  taskItem.querySelector(".delete-btn").addEventListener("click", () => {
    deleteTask(taskItem);
  });

  // Event listener for marking a task as complete
  taskItem.querySelector(".complete-btn").addEventListener("click", () => {
    toggleCompletion(taskItem);
  });
}

// Edit a task
function editTask(taskItem, oldText) {
  const newText = prompt("Edit task:", oldText);
  if (newText !== null && newText.trim() !== "") {
    taskItem.querySelector(".task-text").textContent = newText;
  }
}

// Delete a task
function deleteTask(taskItem) {
  taskItem.remove();
}

// Toggle completion status of a task
function toggleCompletion(taskItem) {
  taskItem.classList.toggle("completed");
}

// Event listener for the add button
addButton.addEventListener("click", addTask);

// Allow pressing "Enter" to add a task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
