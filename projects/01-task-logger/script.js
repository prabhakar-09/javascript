  //
// closures concept here
function createCounter() {
  let count = 0; 

  return function() { 
    count++;
    return count;
  };
}

const getNextTaskNumber = createCounter();

const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', function() {
  // remove whitespace
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Please enter a valid task!");
    return;
  }

  const taskNumber = getNextTaskNumber();

  const li = document.createElement('li');
  
  
  const span = document.createElement('span');
  span.textContent = `${taskNumber}. ${text}`;
  li.appendChild(span);

  // Delete Button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕';
  deleteBtn.className = 'delete-btn';
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
});

taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const li = event.target.parentElement;
    li.remove();
  } 
  
  else if (event.target.tagName === 'LI' || event.target.tagName === 'SPAN') {
    const li = event.target.closest('li');
    li.classList.toggle('completed');
  }
});

// --- Phase 5: Async JS & Event Loop ---

function saveTaskToServer(taskText) {
  return new Promise(function(resolve, reject) {
    console.log("1. Sending task to server...");

    setTimeout(function() {
      if (taskText) {
        resolve(`Server Response: Task "${taskText}" saved successfully!`);
      } else {
        reject("Server Error: Task cannot be empty!");
      }
    }, 2000);
  });
}

async function testSave() {
  console.log("A. Before saving...");
  const result = await saveTaskToServer("Master Async JS");
  console.log("B.", result);
  console.log("C. After saving completed!");
}
