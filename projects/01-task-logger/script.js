const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
                                // async operations 
addBtn.addEventListener('click', function() {
  // remove whitespace
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Please enter a valid task!");
    return;
  }

  const li = document.createElement('li');
  li.textContent = text;
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
});