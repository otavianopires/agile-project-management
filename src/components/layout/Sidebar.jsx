import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <>
      <aside
        aria-label="Sidebar"
        className={`sidebar fixed top-0 left-0 z-20 w-60 h-screen bg-slate-500 text-white transition-transform md:translate-x-0 ${!showSidebar ? '-translate-x-full' : 'transform-none'}`}>
        <div className="inner-sidebar overflow-y-scroll h-full p-6">
          <h3 className="font-bold mb-6 text-md">Board Selection</h3>
          <div className="board-selection flex flex-col gap-2">
            <p>
              <input type="radio" id={`board-0`} name="board" value="0" className="peer/board-0 form-radio mr-2 mb-0.5" />
              <label htmlFor={`board-0`} className="peer-checked/board-0:text-white text-slate-300 font-medium">All Boards</label><br></br>
            </p>
            <p>
              <input type="radio" id={`board-1`} name="board" value="1" className="peer/board-1 form-radio mr-2 mb-0.5" />
              <label htmlFor={`board-1`} className="peer-checked/board-1:text-white text-slate-300 font-medium">Dev Board</label><br></br>
            </p>
            <p>
              <input type="radio" id={`board-2`} name="board" value="2" className="peer/board-2 form-radio mr-2 mb-0.5" />
              <label htmlFor={`board-2`} className="peer-checked/board-2:text-white text-slate-300 font-medium">IT Board</label><br></br>
            </p>
            <p>
              <input type="radio" id={`board-3`} name="board" value="3" className="peer/board-3 form-radio mr-2 mb-0.5" />
              <label htmlFor={`board-3`} className="peer-checked/board-3:text-white text-slate-300 font-medium">UI/UX Board</label><br></br>
            </p>
          </div>
        </div>
      </aside>

      {showSidebar && createPortal(<Backdrop close={() => setShowSidebar(false)} />, document.body)}
    </>
  )
}

export default Sidebar;