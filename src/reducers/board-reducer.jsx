const boardReducer = (board, action) => {
  switch (action.type) {
    case 'FETCH_FULL_BOARD':
      return {
        ...board,
        tasks: action.data.tasks,
        boards: action.data.boards,
        users: action.data.users
      };
    case 'FETCH_ALL_BOARDS':
      return {
        ...board,
        boards: action.boards
      };
    case 'SELECTED_BOARD':
      return {
        ...board,
        selected: action.selected
      };
    case 'FETCH_ALL_TASKS':
      return {
        ...board,
        tasks: action.tasks
      };
    case 'UPDATE_TASK':
      const updatedTasks = board.tasks.map(task => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
      return {
        ...board,
        tasks: updatedTasks
      };
    case 'FETCH_ALL_USERS':
      return {
        ...board,
        users: action.users
      };
    default:
      return board;
  }
}

export default boardReducer;