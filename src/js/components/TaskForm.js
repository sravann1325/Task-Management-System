import { formatDate } from '../utils/dateUtils.js';

export class TaskForm {
  constructor(containerId, taskService, onTaskAdded) {
    this.container = document.getElementById(containerId);
    this.taskService = taskService;
    this.onTaskAdded = onTaskAdded;
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <form id="task-form" class="task-form">
        <div class="form-group">
          <input type="text" id="task-title" placeholder="Task title" required>
        </div>
        <div class="form-group">
          <textarea id="task-description" placeholder="Task description"></textarea>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="task-due-date">Due Date</label>
            <input type="date" id="task-due-date">
          </div>
          <div class="form-group">
            <label for="task-priority">Priority</label>
            <select id="task-priority">
              <option value="low">Low</option>
              <option value="medium" selected>Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div class="form-group">
            <label for="task-category">Category</label>
            <select id="task-category">
              <option value="personal">Personal</option>
              <option value="work">Work</option>
              <option value="shopping">Shopping</option>
              <option value="health">Health</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn-primary">Add Task</button>
      </form>
    `;

    this.attachEventListeners();
  }

  attachEventListeners() {
    const form = document.getElementById('task-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('task-title').value;
      const description = document.getElementById('task-description').value;
      const dueDate = document.getElementById('task-due-date').value;
      const priority = document.getElementById('task-priority').value;
      const category = document.getElementById('task-category').value;
      
      this.taskService.addTask(title, description, dueDate, priority, category);
      this.onTaskAdded();
      form.reset();
    });
  }
}