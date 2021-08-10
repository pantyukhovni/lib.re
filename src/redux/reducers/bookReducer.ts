import { BooksState, BooksActionType, BooksAction, IBook } from "src/types/books";

let initialState: BooksState = {
    books: [
        {Title:"1", Author:'Author_1', Price:23, Published: "2021-01-01", inStock: false, id: 1},
        {Title:"2", Author:'Author_2', Price:45, Published: "2021-01-01", inStock: true, id: 2},
        {Title:"3", Author:'Author_3', Price:100, Published: "2021-01-01", inStock: false, id: 3}
        ],
    bookForModal:{}

}


const BookReducer = (state = initialState, action: BooksAction): BooksState =>{
    switch (action.type) {
        case BooksActionType.ADD_NEW_BOOK:
            return {
                ...state,
                books:[...state.books, action.payload]
            }
        case BooksActionType.DELETE_BOOK:
            return{
                ...state,
                books: state.books.filter(books => books.id !== action.payload)
            }
        case BooksActionType.FETCH_BOOK_BY_ID:
            return{
                ...state,
                bookForModal: state.books.filter(book => book.id === action.bookId)
            }

        case BooksActionType.MODIFY_BOOK:
            debugger;
            return{
                ...state,
                books: state.books.map(book => {
                    if(book.id === action.book.id){
                        return action.book
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

export const addBook = (book: IBook): BooksAction =>({type: BooksActionType.ADD_NEW_BOOK, payload: book})
export const deleteBook = (id: number): BooksAction => ({type: BooksActionType.DELETE_BOOK, payload: id})
export const modifyBook = (book: IBook): BooksAction =>({type: BooksActionType.MODIFY_BOOK, book})
export const fetchBook =(bookId: number): BooksAction => ({type: BooksActionType.FETCH_BOOK_BY_ID, bookId})




export default BookReducer;