import './style.css';
import {
  addList, taskEntry, taskPopulate, getStorage, tasks,
} from '../modules/functions.js';

taskEntry.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addList(tasks);
  }
});
const pageLoad = (tasks) => {
  tasks = getStorage();
  taskPopulate(tasks);
};
pageLoad();