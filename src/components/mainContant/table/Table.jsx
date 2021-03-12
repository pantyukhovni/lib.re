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
                    <tr className={c.cell}>
                        <td>{book.Title}</td>
                        <td>{book.Author}</td>
                        <td>{book.Price} &#8381;</td>
                        <td>{book.Published}</td>
                        <td>{!book.inStock ? "Нету в наличии" : "Есть в наличии"}</td>
                        <td className={c.act}>
                            <ButtonAct className={c.button} type="edit" bookId={book.id} />
                            <ButtonAct className={c.button} type="del"
                                       del={props.deleteBook}
                                       bookId={book.id}
                            />
                        </td>
                    </tr>
                </TRow>
                )

            }
            </tbody>
        </table>
    )
}


export default Table;