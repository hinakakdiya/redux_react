import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";

const baseReducer = combineReducers({todoReducer})

const store = createStore(baseReducer)

export default store