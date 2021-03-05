import THead from "./THead/THead";
import TRow from "./TRow/TRow";
import c from "./Table.module.css"
import ButtonAct from "../../Button/ButtonAct";

const Table = (props) =>{
    return(
        <table className={c.wrapper}>
            <thead>
                <THead />
            </thead>
            <tbody>

            {
                props.books.map(book=>
                <TRow>
                    <tr>
                        <td>{book.Title}</td>
                        <td>{book.Author}</td>
                        <td>{book.Price}</td>
                        <td>{book.Published}</td>
                        <td>{!book.inStock ? "Нету в наличии" : "Есть в наличии"}</td>
                        <ButtonAct type="edit"/>
                        <ButtonAct type="del"/>
                    </tr>
                </TRow>
                )
            }

                {/*<TRow books={props.books}/>*/}
            </tbody>
        </table>
    )
}


export default Table;