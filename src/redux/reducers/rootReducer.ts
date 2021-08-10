import {combineReducers} from "redux";
import { BooksState } from "src/types/books";
import BookReducer from "./bookReducer";

const rootReducer = combineReducers<RootState>({
    books: BookReducer,
})
export default rootReducer;

export type RootState = {
    books: BooksState
}