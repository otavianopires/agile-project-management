import { useState } from "react";
import { createPortal } from "react-dom";
import TaskDetails from "./TaskDetails";
import Modal from "./Modal";
import TaskHeader from "./TaskHeader";

const TaskCard = ({ task }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  }

  const taskBorder =
    task.type === 'task' ? 'border-lime-600'
    : task.type === 'bug' ? 'border-red-700'
    : task.type === 'story' ? 'border-blue-600'
    : 'border-slate-700';

  return (
    <>
      <div
        className={`bg-white py-6 px-4 rounded-md border-l-[3px] border-solid ${taskBorder} cursor-pointer hover:bg-sky-50 drop-shadow-md`}
        onClick={handleClick}
      >
        <TaskHeader task={task} size="small" />
      </div>
      {showModal && createPortal(
        <Modal onCick={() => setShowModal(false)}>
          <TaskDetails task={task} />
        </Modal>,
        document.body
      )}
    </>
  )
}

export default TaskCard;