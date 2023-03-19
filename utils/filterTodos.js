export const filterTodos = (todos, searchTerm) => {
  if (!searchTerm) return todos;
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredTodos;
};
