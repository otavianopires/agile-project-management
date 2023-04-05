import BoardList from "./BoardList";

const Board = () => {
  return (
    <main className="pt-[110px] pb-12 px-6">
      <h2 className="font-bold text-2xl">Selected Board</h2>
      <div className="w-full  overflow-x-auto">
        <div className="grid grid-cols-board md:grid-cols-3 gap-6">
          <BoardList title="To-do" />
          <BoardList title="In Progress" />
          <BoardList title="Done" />
        </div>
      </div>
    </main>
  )
}

export default Board;