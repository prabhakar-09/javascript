
// closures concept here
function createCounter() {
  let count = 0; // Private variable 

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
  li.textContent = `${taskNumber}. ${text}`;
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
});

taskList.addEventListener('click', function(event) {
  console.log("Clicked element:", event.target);
  console.log("Tag name:", event.target.tagName);
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});