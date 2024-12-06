import { Task } from './src/js/models/Task.js';
import { TaskService } from './src/js/services/TaskService.js';
import { TaskList } from './src/js/components/TaskList.js';
import { TaskForm } from './src/js/components/TaskForm.js';

const taskService = new TaskService();
const taskList = new TaskList('task-list-container', taskService);
const taskForm = new TaskForm('task-form-container', taskService, () => {
  taskList.render();
});