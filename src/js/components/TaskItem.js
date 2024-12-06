import { formatDate } from '../utils/dateUtils.js';

export class TaskItem {
  constructor(task, onToggle, onDelete) {
    this.task = task;
    this.onToggle = onToggle;
    this.onDelete = onDelete;
  }

  render() {
    return `
      <div class="task-item ${this.task.completed ? 'completed' : ''} priority-${this.task.priority}" data-id="${this.task.id}">
        <div class="task-checkbox">
          <input type="checkbox" ${this.task.completed ? 'checked' : ''}>
        </div>
        <div class="task-content">
          <div class="task-header">
            <h3>${this.task.title}</h3>
            <div class="task-meta">
              ${this.task.dueDate ? `<span class="due-date ${this.task.isOverdue() ? 'overdue' : ''}">${formatDate(this.task.dueDate)}</span>` : ''}
              <span class="priority priority-${this.task.priority}">${this.task.priority}</span>
              <span class="category">${this.task.category}</span>
            </div>
          </div>
          <p>${this.task.description}</p>
        </div>
        <button class="delete-btn">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
          </svg>
        </button>
      </div>
    `;
  }

  attachEventListeners(element) {
    const checkbox = element.querySelector('input[type="checkbox"]');
    const deleteBtn = element.querySelector('.delete-btn');

    checkbox.addEventListener('change', () => this.onToggle(this.task.id));
    deleteBtn.addEventListener('click', () => this.onDelete(this.task.id));
  }
}