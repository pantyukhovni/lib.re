import c from "./Header.module.css"

const Header = ()=>{
    return (
        <div className={c.wrapper}>
            <div>Библиотека книг</div>
            <div className={c.button}><button>Добавить новую книгу</button></div>
        </div>
    )
}
export default Header;