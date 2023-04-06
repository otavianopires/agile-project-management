import { useBoard, useBoardDispatch } from "../contexts/BoardContext";

export const selectedBoardName = () => {
  const { board } = useBoard();
  const { dispatchBoard } = useBoardDispatch();

  // switch (board.selected) {
  //   case 0:
  //     return 'All Boards';
  //   default:
  //     return 'All Boards';
  // }
  const selectedBoard = board.boards.find((item) => {
    return item.id === parseInt(board.selected)
  }, board);

  if (selectedBoard && selectedBoard !== null ) {
    return selectedBoard.name;
  }

  // const board = boards.find((board) => {
  //   return board.id === parseInt(currentBoard)
  // }, currentBoard)

  // if (board && board !== null) {
  //   return board.name;
  // }
}