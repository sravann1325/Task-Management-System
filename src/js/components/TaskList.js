import { TaskItem } from './TaskItem.js';
import { TaskFilters } from './TaskFilters.js';
import { filterTasks } from '../utils/filterUtils.js';

export class TaskList {
  constructor(containerId, taskService) {
    this.container = document.getElementById(containerId);
    this.taskService = taskService;
    this.filters = new TaskFilters(this.handleFilterChange.bind(this));
    this.render();
  }

  handleFilterChange(filters) {
    const tasks = this.taskService.getAllTasks();
    const filteredTasks = filterTasks(tasks, filters);
    this.renderTasks(filteredTasks);
  }

  render() {
    this.container.innerHTML = `
      ${this.filters.render()}
      <div class="tasks"></div>
    `;
    
    this.filters.attachEventListeners(this.container);
    this.renderTasks(this.taskService.getAllTasks());
  }

  renderTasks(tasks) {
    const tasksContainer = this.container.querySelector('.tasks');
    tasksContainer.innerHTML = tasks.map(task => {
      const taskItem = new TaskItem(
        task,
        (id) => {
          this.taskService.toggleTask(id);
          this.render();
        },
        (id) => {
          this.taskService.deleteTask(id);
          this.render();
        }
      );
      return taskItem.render();
    }).join('');

    tasks.forEach((task, index) => {
      const taskElement = tasksContainer.children[index];
      const taskItem = new TaskItem(task, () => {}, () => {});
      taskItem.attachEventListeners(taskElement);
    });
  }
}