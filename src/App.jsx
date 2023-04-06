import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Board from "./components/elements/Board";
import { useState } from "react";
import { BoardProvider } from "./contexts/BoardContext";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleMenuClick = (e) => {
    e.preventDefault();
    setShowSidebar(!showSidebar);
  }
  return (
    <BoardProvider>
      <div className="App">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        <div className="lg:ml-60">
          <Header handleMenuClick={handleMenuClick} />
          <Board />
        </div>
      </div>
    </BoardProvider>
  )
}

export default App
