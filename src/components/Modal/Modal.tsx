import React from 'react';
import type { FC } from 'react';
import THead from "../mainContant/table/THead/THead";
import  "./Modal.css"

interface ModalProps {
    active: boolean;
    setActive: (active: boolean) => void;
}

const Modal: FC<ModalProps> = ({active, setActive, children}) =>{
    return(
        <div className={active ? "modal" : "disabled" } onClick={()=> setActive(false) }>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;