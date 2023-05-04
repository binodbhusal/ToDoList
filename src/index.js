import './style.css';
import { addList, taskEntry, tasks } from '../modules/functions.js';

taskEntry.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addList(tasks);
  }
});
