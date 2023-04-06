import { useEffect, useState } from "react";
import { useBoard } from "../../contexts/BoardContext";
import BoardList from "./BoardList";
import { useBoardDispatch } from "../../contexts/BoardContext";

const Board = () => {
  const [selectedBoardName, setSelectedBoardName] = useState('');
  const { board } = useBoard();
  const { dispatchBoard } = useBoardDispatch();

  useEffect(() => {
    const fetchFullBoard = async () => {
      const response = await fetch(`/board`);
      const data = await response.json();
      dispatchBoard({
        type: 'FETCH_FULL_BOARD',
        data: data
      })
    }
    fetchFullBoard();
  }, []);

  useEffect(() => {
    const selectedBoard = board.boards.find((item) => {
      return item.id === parseInt(board.selected)
    }, board);
    setSelectedBoardName(!selectedBoard ? 'All boards' : selectedBoard.name);
  }, [board.selected]);

  return (
    <main className="pt-[110px] pb-12 px-6">
      <h2 className="font-bold text-2xl mb-6">{selectedBoardName}</h2>
      <div className="w-full pb-3 overflow-x-auto">
        <div className="grid grid-cols-board md:grid-cols-3 gap-6">
          {board.status.filter(item => item.value !== 'archive').map(item => {
            return (
              <BoardList key={item.value} title={item.text} tasks={board.tasks.filter(task => task.status === item.value).filter(task => board.selected !== 0 ? task.board === board.selected : task === task)} />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Board;