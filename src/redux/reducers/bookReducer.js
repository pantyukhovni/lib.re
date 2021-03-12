import {
    ADD_NEW_BOOK,
    DELETE_BOOK,
    FETCH_BOOK_BY_ID,
    MODIFY_BOOK,
    SET_BOOK
} from "../actionType/ActionType";
import {Api} from "../../API/api";

let initialState = {
    books: [
        {Title:"1", Author:'Author_1', Price:23, Published: "2021-01-01", inStock: false, id: 1},
        {Title:"2", Author:'Author_2', Price:45, Published: "2021-01-01", inStock: true, id: 2},
        {Title:"3", Author:'Author_3', Price:100, Published: "2021-01-01", inStock: false, id: 3}
        ],
    bookForModal:{}

}


const BookReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_NEW_BOOK:
            return {
                ...state,
                books:[...state.books, action.payload]
            }
        case DELETE_BOOK:
            return{
                ...state,
                books: state.books.filter(books => books.id !== action.payload)
            }
        case FETCH_BOOK_BY_ID:
            return{
                ...state,
                bookForModal: state.books.filter(book => book.id === action.bookId)
            }

        case MODIFY_BOOK:
            return{
                ...state,
                books: state.books.map(book => {
                    if(book.id === action.book.id){
                        return{books:action.book}
                    }
                    return book;
                })
            }
        default:
            return{
                ...state
            }

    }
}

export const addBook = (book) =>({type: ADD_NEW_BOOK, payload: book})
export const deleteBook = (id) => ({type: DELETE_BOOK, payload: id})
export const modifyBook = (book)=>({type: MODIFY_BOOK, book})
export const fetchBook =(bookId) => ({type: FETCH_BOOK_BY_ID, bookId})


// export const addBookThunk = ()=>{
//     return(dispatch)=>{
//
//     }
// }


export default BookReducer;