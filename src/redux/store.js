import { combineReducers, createStore } from "redux";
import { toDoReducer } from "./toDo";
import { counter } from "./count";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({ toDoReducer, counter });

const store = createStore(reducer);
console.log(store.getState(), composeWithDevTools());

export default store;
