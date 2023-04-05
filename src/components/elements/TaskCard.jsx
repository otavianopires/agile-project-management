import { useState } from "react";
import { createPortal } from "react-dom";
import TaskDetails from "./TaskDetails";
import Modal from "./Modal";

const TaskCard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  }
  return (
    <>
      <div className="bg-white p-6 rounded-md border-l-4 border-solid border-slate-700 drop-shadow-md" onClick={handleClick}>
        <h4 className="font-bold mb-2">Task name</h4>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      {showModal && createPortal(
        <Modal onCick={() => setShowModal(false)}>
          <TaskDetails />
        </Modal>,
        document.body
      )}
    </>
  )
}

export default TaskCard;