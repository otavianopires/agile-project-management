import { createContext, useContext, useReducer } from "react";
import boardReducer from "../reducers/board-reducer";

const BoardContext = createContext(null);
const BoardDispatchContext = createContext(null);

const initialBoard = {
  selected: 0,
  tasks: [],
  boards: [],
  users: [],
  status: [
    {
      "text": "To-do",
      "value": "to-do"
    },
    {
      "text": "In Progress",
      "value": "in-progress"
    },
    {
      "text": "Done",
      "value": "done"
    },
    {
      "text": "Archive",
      "value": "archive"
    }
  ],
  types: [
    {
      "text": "Story",
      "value": "story"
    },
    {
      "text": "Task",
      "value": "task"
    },
    {
      "text": "Bug",
      "value": "bug"
    }
  ]
}

export const BoardProvider = ({children}) => {
  const [board, dispatchBoard] = useReducer(boardReducer, initialBoard);

  return (
    <BoardContext.Provider value={{ board }}>
      <BoardDispatchContext.Provider  value={{ dispatchBoard }}>
        {children}
      </BoardDispatchContext.Provider>
    </BoardContext.Provider>
  )
}

export const useBoard = () => {
  return useContext(BoardContext);
}

export const useBoardDispatch = () => {
  return useContext(BoardDispatchContext);
}
