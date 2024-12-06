export class Task {
  constructor(id, title, description = '', completed = false, dueDate = null, priority = 'medium', category = 'personal') {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.createdAt = new Date();
    this.dueDate = dueDate;
    this.priority = priority;
    this.category = category;
  }

  toggle() {
    this.completed = !this.completed;
  }

  isOverdue() {
    if (!this.dueDate) return false;
    return new Date(this.dueDate) < new Date();
  }
}