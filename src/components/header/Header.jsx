import React,{useState, useEffect } from "react"
import c from "./Header.module.css"
import Modal from "../Modal/Modal";
import THead from "../mainContant/table/THead/THead";
import NewBook from "../Modal/modalForm/modulForm";



const Header = (props)=>{

    const [modaleActive, setModaleActive] = useState(false)

    return (
        <div className={c.wrapper}>
            <div>Библиотека книг</div>
            <div className={c.button}><button onClick={()=> setModaleActive(true)}>Добавить новую книгу</button></div>
            <Modal active={modaleActive} setActive={setModaleActive}>
                <NewBook setActive={setModaleActive}/>
            </Modal>
        </div>
    )
}
export default Header;