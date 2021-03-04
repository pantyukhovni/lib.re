import THead from "./THead/THead";
import TRow from "./TRow/TRow";
import c from "./Table.module.css"

const Table = (props) =>{
    return(
        <table className={c.wrapper}>
            <thead>
                <THead />
            </thead>
            <tbody>
                <TRow books={props.books}/>
            </tbody>
        </table>
    )
}


export default Table;