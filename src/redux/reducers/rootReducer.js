import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'
import BookReducer from "./bookReducer";

const rootReducer = combineReducers({
    books: BookReducer,
    form: formReducer
})
export default rootReducer;