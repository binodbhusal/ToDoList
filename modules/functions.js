export const taskEntry = document.getElementById('txtTask');
export const tasks = [];
const taskPopulate = (tasks) => {
  const taskList = document.getElementById('container');
  taskList.innerHTML = tasks.map((task) => `
    <div class="task ${task.completed ? 'completed' : ''}">
    <input type="checkbox" ${task.completed ? 'checked' : ''}id="${task.index}">
    <label for = "${task.index}"> "${task.description}"</label>
    <div class="remove"><button class="btnremove"><i class="fa">&#xf014;</i></button></div>
    </div> <hr>
    `).join('');
  const removeTask = (index) => {
    tasks.splice(index, 1);
    taskPopulate(tasks);
  };

  const btnRemove = document.querySelectorAll('.btnremove');
  if (btnRemove) {
    btnRemove.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        removeTask(index);
      });
    });
  }
};
export const addList = () => {
  const taskDescription = taskEntry.value;

  const newTask = {

    description: taskDescription,
    completed: false,
    index: tasks.length,
  };

  tasks.push(newTask);
  taskPopulate(tasks);
  taskEntry.value = '';
};
