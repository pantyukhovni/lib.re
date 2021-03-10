import {connect} from "react-redux";
import Table from "./Table";
import {deleteBook} from "../../../redux/reducers/bookReducer";


const TableContainer = (props) =>{
    return(
        <>
            <Table books={props.books}
                    deleteBook={props.deleteBook}
            />
        </>
    )
}

let mapDispatchToProps = (state) => {
    return {
        books: state.books.books
    }
}


export default connect(mapDispatchToProps, {deleteBook})(TableContainer);