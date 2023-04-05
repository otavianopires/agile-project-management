import BoardList from "./BoardList";

const Board = () => {
  return (
    <main className="p-6">
      <h2 className="font-bold text-2xl">Selected Board</h2>
      <div className="grid grid-cols-3 gap-6 py-4">
        <BoardList title="To-do" />
        <BoardList title="In Progress" />
        <BoardList title="Done" />
      </div>
    </main>
  )
}

export default Board;