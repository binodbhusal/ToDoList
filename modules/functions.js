const populateTaskList = (tasks) => {
  const taskList = document.getElementById('container');
  taskList.innerHTML = tasks.map((task) => `
      <div class="task ${task.completed ? 'completed' : ''}">
        <input type="checkbox" ${task.completed ? 'checked' : ''} id="${task.index}">
        <label for="${task.index}">${task.description}</label>
      </div>
      <hr>
    `).join('');
};
module.exports = populateTaskList;
