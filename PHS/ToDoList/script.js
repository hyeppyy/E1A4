function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  
  if (taskInput.value === '') {
      alert('할일을 작성하시오.');
      return;
  }

  const li = document.createElement('li');
  li.textContent = taskInput.value;

  const completeButton = document.createElement('button');
  completeButton.textContent = '완료';
  completeButton.className = 'complete-button';
  completeButton.onclick = () => {
      li.classList.toggle('completed');
  };

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';
  deleteButton.className = 'delete-button';
  deleteButton.onclick = () => {
      taskList.removeChild(li);
  };

  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = '';
}