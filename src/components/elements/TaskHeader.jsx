import { useBoard } from "../../contexts/BoardContext";

const TaskHeader = ({ task, size }) => {
  const { board } = useBoard();

  const boardName = board.boards.find((board) => {
    return board.id === parseInt(task.board)
  });

  const typeName = board.types.find((type) => {
    return type.value === task.type
  });

  const userName = board.users.find((user) => {
    return user.id === parseInt(task.user)
  });

  const taskBg =
    task.type === 'task' ? 'bg-lime-600'
    : task.type === 'bug' ? 'bg-red-700'
    : task.type === 'story' ? 'bg-blue-600'
    : 'bg-slate-700';

  return (
    <>
      <h4 className={`font-bold ${size === 'small' ? `text-sm` : `text-lg` } mb-4 border-b border-solid border-slate-200 pb-2`}>{task.title}</h4>
      <div className={`flex items-center flex-wrap gap-2 ${size === 'small' ? `text-xs` : `text-md` } mb-3`}>
        <span className={`${taskBg} text-white px-2 py-1 rounded-md font-bold`}>{typeName.text}</span>
        <span className="bg-slate-600 text-white px-2 py-1 rounded-md font-bold">{boardName.name}</span>
      </div>
      {task.user ?
        <p className={`font-bold flex items-center gap-2 m-0 ${size === 'small' ? `text-xs` : `text-md` }`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-slate-500">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
          </svg> {userName.name}
        </p> :
        <p className={`text-slate-500 m-0 ${size === 'small' ? `text-xs` : `text-md` }`}>No user assigned</p>
      }
    </>
  )
}

export default TaskHeader;