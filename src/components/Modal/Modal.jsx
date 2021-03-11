import THead from "../mainContant/table/THead/THead";
import  "./Modal.css"

const Modal = ({active, setActive, children}) =>{
    return(
        <div className={active ? "modal" : "disabled" } onClick={()=> setActive(false) }>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;