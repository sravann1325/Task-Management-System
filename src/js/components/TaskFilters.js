export class TaskFilters {
  constructor(onFilterChange) {
    this.onFilterChange = onFilterChange;
  }

  render() {
    return `
      <div class="task-filters">
        <input type="text" id="search-tasks" placeholder="Search tasks..." class="search-input">
        <div class="filter-group">
          <select id="filter-priority">
            <option value="">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <select id="filter-category">
            <option value="">All Categories</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="shopping">Shopping</option>
            <option value="health">Health</option>
          </select>
        </div>
      </div>
    `;
  }

  attachEventListeners(container) {
    const searchInput = container.querySelector('#search-tasks');
    const priorityFilter = container.querySelector('#filter-priority');
    const categoryFilter = container.querySelector('#filter-category');

    const handleFilterChange = () => {
      this.onFilterChange({
        searchTerm: searchInput.value,
        priority: priorityFilter.value,
        category: categoryFilter.value
      });
    };

    [searchInput, priorityFilter, categoryFilter].forEach(filter => {
      filter.addEventListener('change', handleFilterChange);
      if (filter === searchInput) {
        filter.addEventListener('keyup', handleFilterChange);
      }
    });
  }
}