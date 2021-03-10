import React,{useState, useEffect } from "react"
import c from "./Header.module.css"
import Modal from "../Modal/Modal";


// class Header extends React.Component {
//
//     componentDidUpdate(){
//
//     }
//
//
//
//     render(){
//         return(
//             <div className={c.wrapper}>
//                 <div>Библиотека книг</div>
//                 <div className={c.button}><button onClick={this.handleClick}>Добавить новую книгу</button></div>
//             </div>
//         )
//     }
// }
// export default Header;



const Header = (props)=>{

    const [active, setActive] = useState(false)

    if(active === true){
        return(
            <Modal />
        )
    }

    return (
        <div className={c.wrapper}>
            <div>Библиотека книг</div>
            <div className={c.button}><button onClick={()=> setActive(true)}>Добавить новую книгу</button></div>
        </div>
    )
}
export default Header;