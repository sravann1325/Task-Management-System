import { Task } from '../models/Task.js';

export class TaskService {
  constructor() {
    this.tasks = this.loadTasks();
  }

  loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks.map(task => Object.assign(new Task(), task));
  }

  getAllTasks() {
    return this.tasks;
  }

  addTask(title, description = '', dueDate = null, priority = 'medium', category = 'personal') {
    const task = new Task(Date.now(), title, description, false, dueDate, priority, category);
    this.tasks.push(task);
    this.save();
    return task;
  }

  toggleTask(taskId) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.toggle();
      this.save();
    }
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.save();
  }

  save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}