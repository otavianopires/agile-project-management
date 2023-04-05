import Backdrop from "./Backdrop";

const Modal = ({ onCick, children }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-start justify-center p-10 z-30">
      {children}
      <Backdrop onClick={onCick} />
    </div>
  )
}
export default Modal;