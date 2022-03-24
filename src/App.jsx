import Board from "./components/board/board";
import Modal from "./components/modal/modal";
import "./index.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Board />
      </div>
      <Modal />
    </div>
  );
}
