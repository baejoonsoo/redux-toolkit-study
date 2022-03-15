import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// redux toolkit은 state가 mutate가 되어도 상관 X // immer 아래에서 동작
// mutate or newData return 둘 중 선택하여 사용 가능
// 단 mutate는 return해서는 안된다 // return하는 data는 항상 새로는 state이어야 한다
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.unshift({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
