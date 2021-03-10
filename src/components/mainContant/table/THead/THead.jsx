import c from "../Table.module.css"


const THead = (props)=>{
    return(
        <tr className={c.cell}>
            <td>Название</td>
            <td>Автор</td>
            <td>Стоимость</td>
            <td>Дата выпуска</td>
            <td>Статус</td>
            <td>Действие</td>
        </tr>
    )
}
export default THead;