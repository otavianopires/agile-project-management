import { createPortal } from "react-dom";
import Backdrop from "../elements/Backdrop";
import { useBoard, useBoardDispatch } from "../../contexts/BoardContext";
import BoardRadio from "../elements/BoardRadio";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { board } = useBoard();
  const { dispatchBoard } = useBoardDispatch();

  const handleBoardChange = (e) => {
    dispatchBoard({
      type: 'SELECTED_BOARD',
      selected: parseInt(e.target.id)
    })
    setShowSidebar(false);
  }

  return (
    <>
      <aside
        aria-label="Sidebar"
        className={`sidebar fixed top-0 left-0 z-20 w-60 h-screen bg-slate-200 border-r border-solid border-slate-300 transition-transform lg:translate-x-0 ${!showSidebar ? '-translate-x-full' : 'transform-none'}`}>
        <div className="inner-sidebar overflow-y-scroll h-full p-6">
          <h3 className="font-bold mb-6 text-md">Board Selection</h3>
          <fieldset className="board-selection flex flex-col gap-4">
            <BoardRadio key={0} board={{id: 0, name: 'All Boards'}} selected={board.selected} onChange={handleBoardChange} />
            {
              board.boards.sort((a, b) => {
                if (a.name < b.name) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              }).map(boardItem => {
                return (
                  <BoardRadio key={boardItem.id} board={boardItem} selected={board.selected} onChange={handleBoardChange} />
                )
              })
            }
          </fieldset>
        </div>
      </aside>

      {showSidebar && createPortal(<Backdrop onClick={() => setShowSidebar(false)} classes="lg:hidden" />, document.body)}
    </>
  )
}

export default Sidebar;