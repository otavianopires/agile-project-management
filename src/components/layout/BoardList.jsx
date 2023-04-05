import TaskCard from "./TaskCard";

const BoardList = ({ title }) => {
  return (
    <div>
      <h3 className="my-3">{title} (0)</h3>
      <div className="flex flex-col gap-4">
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  )
}

export default BoardList;