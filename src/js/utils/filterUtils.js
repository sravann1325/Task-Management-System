export const filterTasks = (tasks, { searchTerm = '', priority = '', category = '' }) => {
  return tasks.filter(task => {
    const matchesSearch = searchTerm === '' || 
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = !priority || task.priority === priority;
    const matchesCategory = !category || task.category === category;
    return matchesSearch && matchesPriority && matchesCategory;
  });
};