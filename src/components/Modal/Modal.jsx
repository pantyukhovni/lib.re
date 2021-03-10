import THead from "../mainContant/table/THead/THead";
import c from "./Modal.module.css"

const Modal = (props) =>{
    return(
        <div className={c.modal}>
            <div className={c.modalContent}>
                <THead />
            </div>
        </div>
    )
}

export default Modal;