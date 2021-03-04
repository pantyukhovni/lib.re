import Title from "./title/Title";
import TableContainer from "./table/TableContainer";
import c from "./Contant.module.css"

const Content = (props)=>{
    return(
        <div className={c.wrapper}>
            <Title />
            <TableContainer />
        </div>
    )
}

export default Content;