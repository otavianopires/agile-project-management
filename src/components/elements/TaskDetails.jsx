import { useBoard, useBoardDispatch } from "../../contexts/BoardContext";
import Select from "./Select"
import TaskHeader from "./TaskHeader";

const TaskDetails = ({ task }) => {
  const { board } = useBoard();
  const { dispatchBoard } = useBoardDispatch();

  const taskTypeColor =
    task.type === 'task' ?
    {
      bg: 'bg-lime-600',
      border: 'border-lime-600'
    }
    : task.type === 'bug' ?
    {
      bg: 'bg-red-700',
      border: 'border-red-700'
    }
    : task.type === 'story' ?
    {
      bg: 'bg-blue-600',
      border: 'border-blue-600'
    }
    :
    {
      bg: 'bg-slate-700',
      border: 'border-slate-700'
    };

    const boardName = board.boards.find((board) => {
      return board.id === parseInt(task.board)
    });
  
    const typeName = board.types.find((type) => {
      return type.value === task.type
    });
  
    const userName = board.users.find((user) => {
      return user.id === parseInt(task.user)
    });

  const handleSelectChange = (e) => {
    let updatedTask = {};
    switch (e.target.id) {
      case 'type':
        updatedTask = {...task, type: e.target.value};
        break;
      case 'status':
        updatedTask = {...task, status: e.target.value};
        break;
      case 'user':
        updatedTask = {...task, user: e.target.value};
        break;
      default:
        break;
    }
    dispatchBoard({
      type: 'UPDATE_TASK',
      task: updatedTask,
    });
  }
  return (
    <div className="w-full max-w-2xl max-h-full overflow-y-auto bg-white p-6 rounded-md drop-shadow-md z-20">
      <div className="grid grid-flow-row sm:grid-flow-col grid-col-taskDetails gap-2 sm:gap-8">
        <div className="task">
          <TaskHeader task={task} size="regular" />
          <div className="border-t border-solid border-slate-200 mt-4 pt-4">
            <p>{task.description}</p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 mb-4 bg-slate-200 p-2 rounded-md">
          <Select
            id='type'
            label='Task Type'
            defaultValue={task.type}
            options={board.types.map(type => {
              return {
                key: type.value,
                value: type.value,
                text: type.text,
              }
            })}
            handleSelectChange={handleSelectChange}
          />
          <Select
            id='user'
            label='Assign user'
            defaultValue={task.user}
            options={board.users.map(user => {
              return {
                key: user.id,
                value: user.id,
                text: user.name,
              }
            })}
            handleSelectChange={handleSelectChange}
          />
          <Select
            id='status'
            label='Task Status'
            defaultValue={task.status}
            options={board.status.map(status => {
              return {
                key: status.value,
                value: status.value,
                text: status.text,
              }
            })}
            handleSelectChange={handleSelectChange}
          />
        </div>
      </div>
    </div>
  )
}

export default TaskDetails;