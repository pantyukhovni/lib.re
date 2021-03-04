import {connect} from "react-redux";
import Table from "./Table";


const TableContainer = (props) =>{
    return(
        <>
            <Table books={props.books}/>
        </>
    )
}

let mapDispatchToProps = (state) =>{
    return {
        books: state.books.books
    }
}

export default connect(mapDispatchToProps, null)(TableContainer);