import { useContext } from "react";
import { ModalContext } from "../../context/modalContext";
import Restart from "./restart";
import Win from "./win";

const Modal = () => {
const { show, showModal } = useContext(ModalContext)
//console.log(show)
   return (
    <div className="modal">
      <div className="modal__content">
        <div className="container">
         {/*   <Win/>
           <Restart/>*/}
           {show}
        </div>
      </div>
    </div>
  );
};
export default Modal;
