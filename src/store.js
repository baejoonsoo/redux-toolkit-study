import { configureStore, createSlice } from "@reduxjs/toolkit";

// redux toolkit은 state가 mutate가 되어도 상관 X // immer 아래에서 동작
// mutate or newData return 둘 중 선택하여 사용 가능
// 단 mutate는 return해서는 안된다 // return하는 data는 항상 새로는 state이어야 한다

const toDos = createSlice({
  name: "toDoReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.unshift({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos.actions;

const store = configureStore({ reducer: toDos.reducer });

export default store;
