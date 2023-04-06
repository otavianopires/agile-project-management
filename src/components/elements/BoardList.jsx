import TaskCard from "./TaskCard";

const BoardList = ({ title, tasks }) => {
  return (
    <div>
      <h3 className="my-3 font-bold text-slate-600">{title} ({tasks.length})</h3>
      <div className="flex flex-col gap-4">
        {tasks.map(task => {
          return (<TaskCard key={task.id} task={task} />)
        })}
      </div>
    </div>
  )
}

export default BoardList;