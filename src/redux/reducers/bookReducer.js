import {ADD_NEW_BOOK, DELETE_BOOK} from "../actionType/ActionType";

let initialState = {
    books: [
        {Title:"1", Author:'Author_1', Price:23, Published: "2021-01-01", inStock: false, id: 1},
        {Title:"2", Author:'Author_2', Price:45, Published: "2021-01-01", inStock: false, id: 2},
        {Title:"3", Author:'Author_3', Price:100, Published: "2021-01-01", inStock: false, id: 3}
    ],

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
                books: state.books.filter(book => book !== action.payload)
            }
        default:
            return{
                ...state
            }

    }
}
export default BookReducer;